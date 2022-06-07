const Section = ({ title, children }) => {
  return (
    <section title={title}>
      <h2 className="">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
