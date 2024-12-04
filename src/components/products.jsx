import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Products(props){
    return(
    //     <div class ="products">
    //   <Card.Img src ={props.image}/>
    //   <p>{props.title}</p>
    //   <p>{props.price}</p>
    //   <p>{props.description}</p>

    // </div>
    <div className='product-items'>
    <Card id="cardContainer">
    <Card.Img variant="top" className ="image" src={props.ProductData.image} />
    <Card.Body>
      <Card.Title id ="title">{props.ProductData.title}</Card.Title>
      <Card.Text className ="price">${props.ProductData.price}</Card.Text>

      <Button as = {Link} to ={`/product-details/${props.ProductData.id}`}  id ="button" variant='primary'>View Product</Button>
      {/* <Button id ="button" variant="primary" className ="myBtn">Buy Now</Button> */}
      <Button id ="button" variant="warning">Add to Cart</Button>
    </Card.Body>
  </Card>
  </div>
    )
}

export default Products;