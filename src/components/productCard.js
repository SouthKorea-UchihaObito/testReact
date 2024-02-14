import { Col } from 'react-bootstrap';
function ProductCard(props){
    return (
      <Col sm key={props.index}>
        <img src={process.env.PUBLIC_URL + "/keyboard" + (props.index + 1) + ".jpg"} alt='keyboardImage' width='80%'/>
        <h4>{props.product.title}</h4>
        <p>{props.product.content}</p>
        <span>{props.product.price}</span>
      </Col>
    )
}
export default ProductCard;