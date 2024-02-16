import React from "react";
import Row from "../containers/RowContainer";
const Feedback = ({
  email,
  peopleA,
  peopleAWhats,
  loadingForm,
  honey,
  success,
  btnClick,
  location,
  searchParams,
  refPeopleA,
  refEmail,
  emailSuccess,
  peopleASuccess,
  peopleAWhatsSuccess,
  handleKeyDown,
  handlePeopleAChange,
  handleEmailChange,
  handleHoneypotChange,
  handleSubmit,
  handlePeopleAWhatsChange,
  successMsg,
  gtag,
}) => {
  return (
    <Row opt={{ classes: "feedback", isBoxed: true, numColumns: 2 }}>
      <div id='feedback'>
        <h2>Feedback</h2>
        <h3 className='graydient'>Do you have some questions in mind?</h3>
      </div>
      {/* {loadingForm === false && success === null
        ? "CARREGANDO RESPOSTA ..."
        : null} */}
      {success === false && loadingForm === true ? (
        <form
          onSubmit={handleSubmit}
          method='POST'
          id='cb-contact-form'
          name='cb-contact-form'
          className='validate feedback-inner'
          data-netlify='true'
          netlify-honeypot='botField'
          noValidate
        >
          <p className='hidden'>
            <label>
              Don’t fill this out if you’re human:{" "}
              <input
                name='botField'
                onChange={e => handleHoneypotChange(e.target.value)}
                value={honey}
              />
              <input type='hidden' name='form-name' value='cb-contact-form' />
              <input name='landingUrl' defaultValue={location?.pathname} />
              <input name='searchUrl' defaultValue={searchParams} />
              {/* <input
                      name='logoImage'
                      defaultValue={logoQuery.images.fallback.src}
                    />
                   */}
              <input name='siteUrl' defaultValue={"https://moderntipss.com"} />
              <input name='nowDate' defaultValue={new Date()} />
            </label>
          </p>

          <div className='feedback-inner-hack'>
            <div className='gray-border feedback-name'>
              <label htmlFor='PEOPLEA'>Your Name</label>

              <input
                onKeyDown={e => handleKeyDown(e)}
                // ref={refPeopleA}
                type='text'
                name='PEOPLEA'
                onMouseDown={e => handleKeyDown(e)}
                className={`${
                  peopleASuccess === true
                    ? "success-color"
                    : peopleA === ""
                      ? ""
                      : "error-color"
                }`}
                id='PEOPLEA'
                onChange={e => handlePeopleAChange(e.target.value)}
              />
            </div>
            <div className='gray-border feedback-email'>
              <label htmlFor='EMAIL'>Your Email</label>
              <input
                onKeyDown={e => handleKeyDown(e)}
                // ref={refEmail}
                type='email'
                onMouseDown={e => handleKeyDown(e)}
                onChange={e => handleEmailChange(e.target.value)}
                ref={element => {
                  if (element)
                    element.style.setProperty(
                      "background",
                      "transparent",
                      "important"
                    );
                }}
                defaultValue={email}
                name='EMAIL'
                className={`required email ${
                  emailSuccess === true
                    ? "success-color"
                    : email === ""
                      ? ""
                      : "error-color"
                }`}
                id='EMAIL'
                required
              />
            </div>
          </div>
          <div
            className={`gray-border feedback-textarea message ${
              peopleAWhatsSuccess === true
                ? "success-color"
                : peopleAWhats === ""
                  ? ""
                  : "error-color"
            }`}
          >
            <label htmlFor='peopleAWhats' className={``}>
              Your Message
            </label>
            <textarea
              id='peopleAWhats'
              name='peopleAWhats'
              rows='1'
              cols='33'
              onKeyDown={e => handleKeyDown(e)}
              onMouseDown={e => handleKeyDown(e)}
              onChange={e => handlePeopleAWhatsChange(e.target.value)}
              value={peopleAWhats}
            ></textarea>
          </div>
          {honey ||
          (emailSuccess && peopleASuccess && peopleAWhatsSuccess) === false ? (
            <>
              <p className='button submit-button disabled'>Send a request</p>
            </>
          ) : (
            <>
              <input
                type='submit'
                value={"Send a request"}
                name='subscribe'
                className='button submit-button'
                disabled={
                  emailSuccess && peopleASuccess && peopleAWhatsSuccess
                    ? false
                    : true
                }
                id={gtag ? gtag : ""}
              />
            </>
          )}
          {/* <button>Send a request</button> */}
        </form>
      ) : null}
      {loadingForm === false ? <h2>{successMsg || null}</h2> : null}
    </Row>
  );
};
export default Feedback;
