import React from "react";
import Row from "../containers/RowContainer";
import Image from "next/image";
import Link from "next/link";

const FAQ = ({ faqs, faqFocus, handleClickFaq, anchorSlide, gtag }) => {
  return (
    <div className='faq faq-wrapper'>
      <div className='left'>
        <h2 className='graydient'>Frequently Asked Questions</h2>
        <Row
          opt={{
            classes: "btns-center",
            isBoxed: true,
            numColumns: 1,
          }}
        >
          <Link
            href='/#explore'
            alt=''
            className={"faq-cta cta desktop-only"}
            id={gtag}
          >
            Explore Our Services Now!{" "}
            <span>
              <Image
                src={"/brandimages/right-arrow.png"}
                alt={"The Five Stars Agency"}
                width={22}
                height={22}
                unoptimized
              />
            </span>
          </Link>
        </Row>
      </div>
      <div className='right'>
        <ul className='faq-box'>
          {faqs.map((faq, num) => {
            return (
              <li
                key={num}
                className={`qa-wrapper ${faqFocus === num && faqFocus !== null ? "active" : ""}`}
              >
                <a
                  href={anchorSlide ? `#faq-${num}` : null}
                  id={`faq-${num}`}
                  onClick={() => handleClickFaq(num)}
                >
                  <p
                    className={`question ${faqFocus === num && faqFocus !== null ? "active" : ""}`}
                  >
                    {faq.q}
                    <Image
                      src={"/brandimages/plus.png"}
                      alt={"The Five Stars Agency"}
                      width={16}
                      height={16}
                      className='faq-plus'
                      unoptimized
                    />
                  </p>
                  <p className={`answer ${faqFocus !== num ? "hide" : ""}`}>
                    {faq.a}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default FAQ;
