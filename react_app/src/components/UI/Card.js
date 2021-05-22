import "./Card.css";

function Card(props) {
  // Classes from ExpenseItem is treated as props.className
  const classes = "card " + props.className;
  // props.children is used to hold other custom-component inside Card
  return <div className={classes}>{props.children}</div>;
}

export default Card;
