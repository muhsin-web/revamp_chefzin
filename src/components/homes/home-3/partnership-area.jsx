import Link from 'next/link';
import React, { useState } from 'react';
import { portfolio_data } from '../../../data';

const project_items = portfolio_data.filter(item => item.home_3);
const categories = [...new Set(project_items.map(item => item.category))]

const PartnerArea = () => {
  const [category, setCategory] = useState('Partnership');
  const categoryItems = project_items.filter(item => item.category === category);
  const [items, setItems] = useState(categoryItems);

  const handleCategoryItems = (category) => {
    setCategory(category);
    const filtering_category_items = project_items.filter(item => item.category === category);
    setItems(filtering_category_items)
  }

  const project_contents = {
    subtitle: 'Projects',
    title: `Chefzin Online ${' '}`,
    highlight_text: 'courses'
  }
  const { title, subtitle, highlight_text } = project_contents;
  return (
    <>
      <div className="tp-project-area tp-cc-project grey-bg pt-130 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="tp-project-section-box text-center pb-25">
                <h5 className="tp-subtitle">{subtitle}</h5>
                <h2 className="tp-title-sm pb-30">{title}
                  <span className="tp-section-highlight">
                    {highlight_text}
                    <svg width="160" height="11" viewBox="0 0 160 11" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L160 11H0V0Z" fill="#FFDC60" />
                    </svg>
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-70">
            <div className="col-10 p-0 text-center">
              <div className="tp-project-tab-button tp-radius-button masonary-menu">
                {categories.map((c, i) => (
                  <button key={i} className={c === category ? "active" : ''} onClick={() => handleCategoryItems(c)}>
                    <span>{c}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row grid">
            {items.map((item) => {
              const { id, img, title, big, subtitle } = item;
              return <div key={id} className={`${big ? 'col-xl-8 col-lg-8 col-md-12' : 'col-xl-4 col-lg-4 col-md-6'}`}>
                <div className="tp-project-item-four mb-30">
                  <div className="tp-project-item-four__img fix">
                    <a href="#"><img className="w-100" src={img} alt="" /></a>
                  </div>
                  <div className="tp-project-item-four__bg">
                    <div className="tp-project-item-four__bg-info">
                      <h3 className="tp-project-title">
                        <Link href={`/portfolio-details/${id}`}>
                          <a>{title}</a>
                        </Link>
                      </h3>
                      <h5 className="tp-project-subtitle">{subtitle}</h5>
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerArea;