function LogoRow({ title, logos }) {
  return (
    <div className="logo-row">
      {title && <h4 className="logo-row-title">{title}</h4>}
      <div className="logo-row-logos">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="logo" className="logo-image" />
        ))}
      </div>
    </div>
  );
}

export default LogoRow;
