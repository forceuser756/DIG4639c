import "./index.css";

class Card {
  constructor(props){
    this.props = props;
  }
  render(){
    return `<div class="Card">${this.props.content}
    <p>Card should display this content</p></div>`;
  }

}
export default Card;
