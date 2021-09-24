import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import './NewReview.css';

const NewReview = ({ characters, closeHandler, productId }) => {
  const [ selectRecommendation, setSelectRecommendation ] = useState(true);
  const [ selectSize, setSelectSize ] = useState(0);
  const [ selectComfort, setSelectComfort ] = useState(0);
  const [ selectQuality, setSelectQuality ] = useState(0);
  const [ selectWidth, setSelectWidth ] = useState(0);
  const [ selectLength, setSelectLength ] = useState(0);
  const [ selectFit, setSelectFit ] = useState(0);
  const [ rating, setRating ] = useState(0);
  const [ hover, setHover ] = useState(0);
  const [ showSize, setShowSize ] = useState(false);
  const [ showFit, setShowFit ] = useState(false);
  const [ showLength, setShowLength ] = useState(false);
  const [ showComfort, setShowComfort ] = useState(false);
  const [ showQuality, setShowQuality ] = useState(false);
  const [ showWidth, setShowWidth ] = useState(false);
  const [ summary, setSummary ] = useState('');
  const [ body, setBody ] = useState('');
  const [ bodyFormLength, setBodyFormLength ] = useState('0');
  const [ selectedFile, setSelectedFile ] = useState([]);
  const [ toggleUpload, setToggleUpload ] = useState(true);
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ formSubmission, setFormSubmission ] = useState('');
  const [ errors, setErrors ] = useState([]);

  useEffect(() => {
    if (characters.Size) setShowSize(true);
    if (characters.Fit) setShowFit(true);
    if (characters.Length) setShowLength(true);
    if (characters.Comfort) setShowComfort(true);
    if (characters.Quality) setShowQuality(true);
    if (characters.Width) setShowWidth(true)
  }, [characters]);

  const handleRecommendation = (e) => {
    if (e.target.value === 'true') {
      setSelectRecommendation(true)
    }
    if (e.target.value === 'false') {
      setSelectRecommendation(false)
    }
  }

  const bodyChangeHandler = (e) => {
    setBody(e.target.value)
    setBodyFormLength(e.target.value.length)
  }

  const fileChangedHandler = (e) => {
    e.preventDefault();
    let file_reader = new FileReader();
    let file = e.target.files[0];

    file_reader.onload = () => {
      setSelectedFile([...selectedFile, {
        uploaded_file: file_reader.result,
        photoURL: URL.createObjectURL(file) }
      ]);
    }
    file_reader.readAsDataURL(file);

    if (selectedFile.length >= 5) {
      setToggleUpload(false);
    }
  }

  const uploadHandler = (e) => {
    e.preventDefault();
    console.log('You just uploaded: ', selectedFile)
  }

  const validateSubmission = (submission) => {
    let errors = [];
    if (submission.rating === 0) errors.push('Please select a rating!');
    if (submission.recommend === null) errors.push('Please select recommendation!');
    if (bodyFormLength < 50 || bodyFormLength > 1000) errors.push('Review body must be between 50 and 1000 characters');
    if (submission.name === '') errors.push('Username Required');
    if (submission.email === '') errors.push('Email Required');
    if (submission.email.indexOf('@') === -1 || submission.email.indexOf('.') === -1) errors.push('Please provide a valid email');
    return errors;
  }

  const createFormCharacters = () => {
    let formCharacters = {};
    if (characters.Size) formCharacters[characters['Size']['id']] = parseInt(selectSize);
    if (characters.Fit) formCharacters[characters['Fit']['id']] = parseInt(selectFit);
    if (characters.Length) formCharacters[characters['Length']['id']] = parseInt(selectLength);
    if (characters.Comfort) formCharacters[characters['Comfort']['id']] = parseInt(selectComfort);
    if (characters.Quality) formCharacters[characters['Quality']['id']] = parseInt(selectQuality);
    if (characters.Width)  formCharacters[characters['Width']['id']] = parseInt(selectWidth);
    return formCharacters;
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const submission = {
      product_id: productId,
      rating: rating,
      summary: summary,
      recommend: selectRecommendation,
      body: body,
      name: name,
      email: email,
      photos: selectedFile,
      characteristics: createFormCharacters()
    }

    const errors = validateSubmission(submission);
    if (errors.length > 0) {
      setErrors(errors);
      return;
    } else {
      setFormSubmission(submission);
      closeHandler();
      // addReviewHandler();

      axios.post("/reviews", formSubmission)
        .then(response => console.log(response.data))
        .catch(error => console.log('error', error));
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <div>
          <div>
            <h3>Overall Rating</h3>
            <div>
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <div key={index}>
                    <button
                      type='button'
                      key={index}
                      className={ index <= rating ? 'on' : 'off' }
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                      >
                      <span>&#9733;</span>
                      </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>Do you recommend this product?</h3>
              <div>
                <label>
                <input
                  type="radio"
                  value={true}
                  checked={selectRecommendation}
                  onChange={handleRecommendation} />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    value={false}
                    checked={!selectRecommendation}
                    onChange={handleRecommendation} />
                  No
                </label>
              </div>
          </div>
        </div>

        <div>
          <h3>Characteristics</h3>
          <div>
            <div>
              {showSize &&
                (<div>
                  <label>Size......................................................
                    <label>
                      A size too small
                      <input type="radio" value={1} checked={selectSize === '1'} onChange={(e) => setSelectSize(e.target.value)} />
                    </label>
                    <label>
                      1/2 a size too small
                      <input type="radio" value={2} checked={selectSize === '2'} onChange={(e) => setSelectSize(e.target.value)} />
                    </label>
                    <label>
                      Perfect
                      <input type="radio" value={3} checked={selectSize === '3'} onChange={(e) => setSelectSize(e.target.value)} />
                    </label>
                    <label>
                      1/2 a size too big
                      <input type="radio" value={4} checked={selectSize === '4'} onChange={(e) => setSelectSize(e.target.value)} />
                    </label>
                    <label>
                      A size too wide
                      <input type="radio" value={5} checked={selectSize === '5'} onChange={(e) => setSelectSize(e.target.value)} />
                    </label>
                  </label>
                </div>
                )}
              {showWidth &&
                (<div >>
                  <label>Width..............
                  <label>
                      Too Narrow
                      <input type="radio" value={1} checked={selectWidth === '1'} onChange={(e) => setSelectWidth(e.target.value)} />
                    </label>
                    <label>
                      Slightly Narrow
                      <input type="radio" value={2} checked={selectWidth === '2'} onChange={(e) => setSelectWidth(e.target.value)} />
                    </label>
                    <label>
                      Perfect
                      <input type="radio" value={3} checked={selectWidth === '3'} onChange={(e) => setSelectWidth(e.target.value)} />
                    </label>
                    <label>
                      Slightly Wide
                      <input type="radio" value={4} checked={selectWidth === '4'} onChange={(e) => setSelectWidth(e.target.value)} />
                    </label>
                    <label>
                      Too Wide
                      <input type="radio" value={5} checked={selectWidth === '5'} onChange={(e) => setSelectWidth(e.target.value)} />
                    </label>
                  </label>
                </div>
                )}
              {showComfort &&
                (<div>
                  <label className="labelItems"><span>Comfort................
                  <label>
                      Uncomfortable
                      <input type="radio" value={1} checked={selectComfort === '1'} onChange={(e) => setSelectComfort(e.target.value)} />
                    </label></span>
                    <label>
                      Slightly Uncomfortable
                      <input type="radio" value={2} checked={selectComfort === '2'} onChange={(e) => setSelectComfort(e.target.value)} />
                    </label>
                    <label>
                      Ok
                      <input type="radio" value={3} checked={selectComfort === '3'} onChange={(e) => setSelectComfort(e.target.value)} />
                    </label>
                    <label>
                      Comfortable
                      <input type="radio" value={4} checked={selectComfort === '4'} onChange={(e) => setSelectComfort(e.target.value)} />
                    </label>
                    <label>
                      Perfect
                      <input type="radio" value={5} checked={selectComfort === '5'} onChange={(e) => setSelectComfort(e.target.value)} />
                    </label>
                  </label>
                </div>
                )}
              {showQuality &&
                (<div>
                  <label className="labelItems"><span>Quality...................
                  <label>
                      Poor
                      <input type="radio" value={1} checked={selectQuality === '1'} onChange={(e) => setSelectQuality(e.target.value)} />
                    </label></span>
                    <label>
                      Below Average
                      <input type="radio" value={2} checked={selectQuality === '2'} onChange={(e) => setSelectQuality(e.target.value)} />
                    </label>
                    <label>
                      What I expected
                      <input type="radio" value={3} checked={selectQuality === '3'} onChange={(e) => setSelectQuality(e.target.value)} />
                    </label>
                    <label>
                      Pretty Great
                      <input type="radio" value={4} checked={selectQuality === '4'} onChange={(e) => setSelectQuality(e.target.value)} />
                    </label>
                    <label>
                      Perfect
                      <input type="radio" value={5} checked={selectQuality === '5'} onChange={(e) => setSelectQuality(e.target.value)} />
                    </label>
                </label>
              </div>
                )}
              {showLength &&
                (<div>
                  <label className="labelItems"><span>Length....................
                  <label>
                      Runs Short
                      <input type="radio" value={1} checked={selectLength === '1'} onChange={(e) => setSelectLength(e.target.value)} />
                    </label></span>
                    <label>
                      Runs Slightly Short
                      <input type="radio" value={2} checked={selectLength === '2'} onChange={(e) => setSelectLength(e.target.value)} />
                    </label>
                    <label>
                      Perfect
                      <input type="radio" value={3} checked={selectLength === '3'} onChange={(e) => setSelectLength(e.target.value)} />
                    </label>
                    <label>
                    Runs Slightly Long
                      <input type="radio" value={4} checked={selectLength === '4'} onChange={(e) => setSelectLength(e.target.value)} />
                    </label>
                    <label>
                      Runs Long
                      <input type="radio" value={5} checked={selectLength === '5'} onChange={(e) => setSelectLength(e.target.value)} />
                    </label>
                  </label>
                </div>
                )}
              {showFit &&
                (<div>
                  <label className="labelItems"><span>Fit...............................
                  <label>
                      Runs Tight
                      <input type="radio" value={1} checked={selectFit=== '1'} onChange={(e) => setSelectFit(e.target.value)} />
                    </label></span>
                    <label>
                      Runs Slightly Tightly
                      <input type="radio" value={2} checked={selectFit === '2'} onChange={(e) => setSelectFit(e.target.value)} />
                    </label>
                    <label>
                      Perfect
                      <input type="radio" value={3} checked={selectFit === '3'} onChange={(e) => setSelectFit(e.target.value)} />
                    </label>
                    <label>
                    Runs Slightly Long
                      <input type="radio" value={4} checked={selectFit === '4'} onChange={(e) => setSelectFit(e.target.value)} />
                    </label>
                    <label>
                      Runs Long
                      <input type="radio" value={5} checked={selectFit === '5'} onChange={(e) => setSelectFit(e.target.value)} />
                    </label>
                  </label>
                </div>
                )}
            </div>
          </div>
        </div>

          <div>
            <h3>Review Summary</h3>
            <input placeholder="Example: Best purchase ever! (max 60 characters)" type='text'
              onChange={(e) => setSummary(e.target.value)} maxLength={60} />
          </div>

          <div>
            <h3>Review Body</h3>
            <input placeholder="Why did you like the product or not? (min 50 characters)" type='textarea' maxLength={1000}
              onChange={bodyChangeHandler} />
            <h5>{bodyFormLength} / 1000</h5>
          </div>

          <div>
            <div>
              <h3>Upload Photos (5 Max)</h3>
            </div>
            <div>
              {toggleUpload &&
                (<input type='file' multiple accept='.jpeg, .png, .pdf' onChange={fileChangedHandler} />
                )}
            </div>
            <div>
                {
                  selectedFile.map(photo => (
                    <img src={photo.photoURL} alt='upload' height="30px" />
                  ))
                }
            </div>
            <button aria-label="Upload Photos" onClick={uploadHandler}>Upload</button>
          </div>

          <div>
            <h3>Nickname</h3>
            <input placeholder="Example: jackson11!" type='text' onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <h3>Email</h3>
            <input placeholder="Example: jackson11@email.com" type='text' maxLength={60} onChange={(e) => setEmail(e.target.value)}/>
            <h5>“For authentication reasons, you will not be emailed” </h5>
          </div>
          <div>
            <ul>
              {errors.map((error, index) => (
                <li className="rating-form-error" key={index}>{error}</li>
              ))}
            </ul>
          </div>
        <div >
          <input type='submit' value="submit" />
        </div>
      </div>
    </form>
  );

};

export default NewReview;