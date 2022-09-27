import React from 'react';

const Section = ({ children }) => {
  return <section className="section">{children}</section>;
};

const SectionTitle = ({ children }) => {
  return <div className="section__title">{children}</div>;
};

const SectionBody = ({ children }) => {
  return <div className="section__body">{children}</div>;
};

export { SectionTitle, SectionBody };
export default Section;
