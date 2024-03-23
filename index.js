const Button = (props) => {
  const { className, buttonText } = props;
  return <div className={`button ${className}`}> {buttonText} </div>;
};

const element = (
  <div className="social-buttons-container">
    <div className="social-card">
      <h1 className="social-heading">Social Buttons </h1>
      <div className="social-buttons">
        <Button className="like" buttonText="Like" />
        <Button className="comment" buttonText="Comment" />
        <Button className="share" buttonText="Share" />
      </div>
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
