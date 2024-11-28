import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" >
      <h1>Amazon E-Commerce Website</h1>
      <div className="Main"> 
        <Card src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/Q73093s.jpg?im=Resize,width=750"
              head="Blue Shirt"
              para="Latest design blue shirt"
        />
         <Card src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/609705s.jpg?im=Resize,width=750"
              head="Red Shirt"
              para="Latest design Red shirt"
        />
        <Card src="https://th.bing.com/th/id/OIP.gDCcpzn52meuJ0KeZXYXeAHaJE?rs=1&pid=ImgDetMain" alt=""
              head="Yellow Shirt"
              para="Latest design yellow shirt"/>
        <Card src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/154300s.jpg?im=Resize,width=750" alt=""
              head="Green Shirt"
              para="Latest design green shirt"/>
              <Card src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/Q88931s.jpg?im=Resize,width=480" alt=""
              head="Orange Shirt"
              para="Latest design orange shirt"/>
               <Card src="https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/N23295s.jpg?im=Resize,width=750" alt= ""
              head="Purple Shirt"
              para="Latest design Purple shirt"
        />
      </div>
    </div>
  );
}

function Card(info){
  return(
    <div className="card">
      <img src={info.src} alt="image1" />
      <h1>{info.head}</h1>
      <p>{info.para}</p>
      <button>Buy Now</button>
    </div>
  )
}


export default App;
