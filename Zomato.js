import react from "react";
import "./App.css";
import img1 from "./Pictures/Pic1.png";
import img2 from "./Pictures/Pic2.png";
import img3 from "./Pictures/Pic3.png";
import img4 from "./Pictures/Pic4.png";
import img5 from "./Pictures/Pic5.png";
import img6 from "./Pictures/Pic6.png";
import img7 from "./Pictures/Pic7.png";
import img8 from "./Pictures/Pic8.png";
import img9 from "./Pictures/Pic9.png";
import img10 from "./Pictures/Pic10.png";
import img11 from "./Pictures/Pic11.png";

class Zomato extends react.Component {
    
    state = {restaurant: true, hotelOne : false,
         orderonline : false,
         add : false,
         order : 0,
         total : 0,
         bill : false,
         cancel : false,
         menu1 : false,
         menu2 : false,
         menu3 : false,
         menu4 : false,
         menu5 : false,
         item1 : false,
         item2 : false,
         item3 : false,
         item4 : false,
         item5 : false,
         item6 : false,
         item7 : false,
         item8 : false,
         item9 : false,
         item10 : false,
         item11 : false,
         item12 : false,
         item13 : false,
         item14 : false,
         item15 : false,
         item16 : false,
         item17 : false,
         item18 : false,
         item19 : false,
         item20 : false,
         smallbill1 : 190,
         smallbill2 : 190,
         smallbill3 : 190,
         smallbill4 : 190,
         smallbill5 : 380,
         smallbill6 : 350,
         smallbill7 : 280,
         smallbill8 : 250,
         smallbill9 : 300,
         smallbill10 :300,
         smallbill11 :300,
         smallbill12 :300,
         smallbill13 :220,
         smallbill14 :220,
         smallbill15 :220,
         smallbill16 :150,
         smallbill17 :250,
         smallbill18 :250,
         smallbill19 :250,
         smallbill20 :380, 
         number1 : 1, 
         number2 : 1, 
         number3 : 1, 
         number4 : 1, 
         number5 : 1, 
         number6 : 1, 
         number7 : 1, 
         number8 : 1, 
         number9 : 1, 
         number10 : 1, 
         number11 : 1, 
         number12 : 1, 
         number13 : 1, 
         number14 : 1, 
         number15 : 1, 
         number16 : 1, 
         number17 : 1, 
         number18 : 1, 
         number19 : 1, 
         number20 : 1
        }
    hotelOne = () =>{
        this.setState({restaurant : false})
        this.setState({hotelOne : true})
    }
    orderonline = () =>{
        this.setState({orderonline : true})
    }
    menu1 = () =>{
        this.setState({menu1 : true})
        this.setState({menu2 : false})
        this.setState({menu3 : false})
        this.setState({menu4 : false})
        this.setState({menu5 : false})
    }
    menu2 = () =>{
        this.setState({menu1 : false})
        this.setState({menu2 : true})
        this.setState({menu3 : false})
        this.setState({menu4 : false})
        this.setState({menu5 : false})
    }
    menu3 = () =>{
        this.setState({menu1 : false})
        this.setState({menu2 : false})
        this.setState({menu3 : true})
        this.setState({menu4 : false})
        this.setState({menu5 : false})
    }
    menu4 = () =>{
        this.setState({menu1 : false})
        this.setState({menu2 : false})
        this.setState({menu3 : false})
        this.setState({menu4 : true})
        this.setState({menu5 : false})
    }
    menu5 = () =>{
        this.setState({menu1 : false})
        this.setState({menu2 : false})
        this.setState({menu3 : false})
        this.setState({menu4 : false})
        this.setState({menu5 : true})
    }
    add = (item) => {
        
        switch (item){
        case 1:
            if(this.state.item1 == false){
            this.setState({item1 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 2:
            if(this.state.item2 == false){
            this.setState({item2 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 3:
            if(this.state.item3 == false){
            this.setState({item3 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 4:
            if(this.state.item4 == false){
            this.setState({item4 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 5:
            if(this.state.item5 == false){
            this.setState({item5 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 6:
            if(this.state.item6 == false){
            this.setState({item6 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 7:
            if(this.state.item7 == false){
            this.setState({item7 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 8:
            if(this.state.item8 == false){
            this.setState({item8 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 9:
            if(this.state.item9 == false){
            this.setState({item9 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 10:
            if(this.state.item10 == false){
            this.setState({item10 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 11:
            if(this.state.item11 == false){
            this.setState({item11 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 12:
        if(this.state.item12 == false){
            this.setState({item12 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 13:
            if(this.state.item13 == false){
            this.setState({item13 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 14:
            if(this.state.item14 == false){
            this.setState({item14 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 15:
            if(this.state.item15 == false){
            this.setState({item15 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 16:
            if(this.state.item16 == false){
            this.setState({item16 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 17:
            if(this.state.item17 == false){
            this.setState({item17 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 118:
            if(this.state.item18 == false){
            this.setState({item18 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 19:
            if(this.state.item19 == false){
            this.setState({item19 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        case 20:
            if(this.state.item20 == false){
            this.setState({item20 : true})
            this.setState({cancel : true})
            this.setState({add: true})
            this.setState({order : this.state.order + 1})
            this.setState({total : this.state.total + 1})
            }
            break;
        }
    }
    bill = () => {
        this.setState({bill : true})
        this.setState({cancel : true})
    }
    cancelbill = () => {
        this.setState({cancel : false})
    }
    
    increment = (type) => {
        if (type == 1) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill1 : this.state.smallbill1 + 190})
            this.setState({number1 : this.state.number1 + 1})
        }
        if (type == 2) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill2 : this.state.smallbill2 + 190})
            this.setState({number2 : this.state.number2 + 1})
        }
        if (type == 3) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill3 : this.state.smallbill3 + 190})
            this.setState({number3 : this.state.number3 + 1})
        }
        if (type == 4) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill4 : this.state.smallbill4 + 190})
            this.setState({number4 : this.state.number4 + 1})
        }
        if (type == 5) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill5 : this.state.smallbill5 + 380})
            this.setState({number5: this.state.number5 + 1})
        }
        if (type == 6) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill6 : this.state.smallbill6 + 350})
            this.setState({number6 : this.state.number6 + 1})
        }
        if (type == 7) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill7 : this.state.smallbill7 + 280})
            this.setState({number7 : this.state.number7 + 1})
        }
        if (type == 8) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill8 : this.state.smallbill8 + 250})
            this.setState({number8 : this.state.number8 + 1})
        }
        if (type == 9) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill9 : this.state.smallbill9 + 200})
            this.setState({number9 : this.state.number9 + 1})
        }
        if (type == 10) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill10 : this.state.smallbill10 + 300})
            this.setState({number10 : this.state.number10 + 1})
        }
        if (type == 11) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill11 : this.state.smallbill11 + 300})
            this.setState({number11 : this.state.number11 + 1})
        }
        if (type == 12) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill12 : this.state.smallbill12 + 300})
            this.setState({number12 : this.state.number12 + 1})
        }
        if (type == 13) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill13 : this.state.smallbill13 + 220})
            this.setState({number13 : this.state.number13 + 1})
        }
        if (type == 14) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill14 : this.state.smallbill14 + 220})
            this.setState({number14 : this.state.number14 + 1})
        }
        if (type == 15) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill15 : this.state.smallbill15 + 220})
            this.setState({number15 : this.state.number15 + 1})
        }
        if (type == 16) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill16 : this.state.smallbill16 + 150})
            this.setState({number16 : this.state.number16 + 1})
        }
        if (type == 17) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill17 : this.state.smallbill17 + 200})
            this.setState({number17 : this.state.number1 + 17})
        }
        if (type == 18) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill18 : this.state.smallbill18 + 250})
            this.setState({number18 : this.state.number18 + 1})
        }
        if (type == 19) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill19 : this.state.smallbill19 + 250})
            this.setState({number19 : this.state.number19 + 1})
        }
        if (type == 20) {
            this.setState({total : this.state.total + 1})
            this.setState({smallbill20 : this.state.smallbill20 + 380})
            this.setState({number20 : this.state.number20 + 1})
        }
    }
    decrement = (type) => {
        if (type == 1) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill1 : this.state.smallbill1 - 190})
            this.setState({number1 : this.state.number1 - 1})
            if(this.state.number1 == 1){
                this.setState({item1 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 2) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill2 : this.state.smallbill2 - 190})
            this.setState({number2 : this.state.number2 - 1})
            if(this.state.number2 == 1){
                this.setState({item2 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 3) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill3 : this.state.smallbill3 - 190})
            this.setState({number3 : this.state.number3 - 1})
            if(this.state.number3 == 1){
                this.setState({item3 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 4) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill4 : this.state.smallbill4 - 190})
            this.setState({number4 : this.state.number4 - 1})
            if(this.state.number4 == 1){
                this.setState({item4 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 5) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill5 : this.state.smallbill5 - 380})
            this.setState({number5 : this.state.number5 - 1})
            if(this.state.number5 == 1){
                this.setState({item5 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 6) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill6 : this.state.smallbill6 - 350})
            this.setState({number6 : this.state.number6 - 1})
            if(this.state.number6 == 1){
                this.setState({item6 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 7) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill7 : this.state.smallbill7 - 280})
            this.setState({number7 : this.state.number7 - 1})
            if(this.state.number7 == 1){
                this.setState({item7 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 8) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill8 : this.state.smallbill8 - 250})
            this.setState({number8 : this.state.number8 - 1})
            if(this.state.number8 == 1){
                this.setState({item8 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 9) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill9 : this.state.smallbill9 - 200})
            this.setState({number9 : this.state.number9 - 1})
            if(this.state.number8 == 1){
                this.setState({item8 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 10) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill10 : this.state.smallbill10 - 300})
            this.setState({number10 : this.state.number10 - 1})
            if(this.state.number9 == 1){
                this.setState({item9 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 11) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill11 : this.state.smallbill11 - 300})
            this.setState({number11 : this.state.number11 - 1})
            if(this.state.number10 == 1){
                this.setState({item10 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 12) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill12 : this.state.smallbill12 - 300})
            this.setState({number12 : this.state.number12 - 1})
            if(this.state.number12 == 1){
                this.setState({item12 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 13) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill13 : this.state.smallbill13 - 220})
            this.setState({number13 : this.state.number13 - 1})
            if(this.state.number13 == 1){
                this.setState({item13 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 14) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill14 : this.state.smallbill14 - 220})
            this.setState({number14 : this.state.number14 - 1})
            if(this.state.number14 == 1){
                this.setState({item14 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 15) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill15 : this.state.smallbill15 - 220})
            this.setState({number15 : this.state.number15 - 1})
            if(this.state.number15 == 1){
                this.setState({item15 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 16) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill16 : this.state.smallbill16 - 150})
            this.setState({number16 : this.state.number16 - 1})
            if(this.state.number16 == 1){
                this.setState({item16 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 17) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill17 : this.state.smallbill17 - 200})
            this.setState({number17 : this.state.number17 - 1})
            if(this.state.number17 == 1){
                this.setState({item17 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 18) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill18 : this.state.smallbill18 - 250})
            this.setState({number18 : this.state.number18 - 1})
            if(this.state.number18 == 1){
                this.setState({item18 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 19) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill19 : this.state.smallbill19 - 250})
            this.setState({number19 : this.state.number19 - 1})
            if(this.state.number19 == 1){
                this.setState({item19 : false})
                this.setState({order : this.state.order - 1})
            }
        }
        if (type == 20) {
            this.setState({total : this.state.total - 1})
            this.setState({smallbill20 : this.state.smallbill20 - 380})
            this.setState({number20 : this.state.number20 - 1})
            if(this.state.number20 == 1){
                this.setState({item20 : false})
                this.setState({order : this.state.order - 1})
            }
        }
    }




    render () {
        return (
            <>
            {this.state.restaurant && <div>
                <div className="loc">Dine-Out Restaurants in Chennai</div>
                <div style={{display : 'flex'}} onClick={this.hotelOne}>
                    <div className="width hov">
                        <div><img className="img" src={img1} alt="Restaurant"/></div>
                        <div className="name">The Thief</div>
                        <div className="type">
                            <div className="type_var">North Indian, Continental, Italian, Asian, Desserts, Beverages</div>
                            <div className="type_cost">Rs.1800 for two</div>
                        </div>
                        <div className="area">Nungampakkam, chennai</div>
                        <div className="red">Opens at 12 noon</div>
                    </div>
                    <div className="width hov">
                        <div><img className="img" src={img2} alt="Restaurant"/></div>
                        <div className="name">La Cabana</div>
                        <div className="type">
                            <div className="type_var">Italian, North Indian, Continental, Chinese, Desserts, Beverages</div>
                            <div className="type_cost">Rs.1500 for two</div>
                        </div>
                        <div className="area">Hotel Park Elanza Nungampakkam, chennai</div>
                        <div className="red">Opens at 5:30 pm</div>
                    </div>
                    <div className="width hov">
                        <div><img className="img" src={img3} alt="Restaurant"/></div>
                        <div className="name">East Coast At Madras Square</div>
                        <div className="type">
                            <div className="type_var">Italian, Continental, North Indian, Asian, Desserts</div>
                            <div className="type_cost">Rs.1700 for two</div>
                        </div>
                        <div className="area">Neelangarai, chennai</div>
                        <div className="red">Opens at 11am</div>
                    </div>
                    <div className="width hov">
                        <div><img className="img" src={img4} alt="Restaurant"/></div>
                        <div className="name">The Mayflower</div>
                        <div className="type">
                            <div className="type_var">Italian, Asian, Continental, European, Mediterranean, Healthy Food, Desserts, Beverages</div>
                            <div className="type_cost">Rs.1500 for two</div>
                        </div>
                        <div className="area">Teynampet, Chennai</div>
                        <div className="red">Opens at 11am</div>
                    </div>
                </div>

                <div style={{display : 'flex'}} onClick={this.hotelOne}>
                    <div className="width hov">
                        <div><img className="img" src={img5} alt="Restaurant"/></div>
                        <div className="name">Coal Barbecues</div>
                        <div className="type">
                            <div className="type_var">North Indian, Chinese, Desserts</div>
                            <div className="type_cost">Rs.1400 for two</div>
                        </div>
                        <div className="area">T. Nagar, Chennai</div>
                        <div className="red">Opens at 12 noon</div>
                    </div>
                    <div className="width hov">
                        <div><img className="img" src={img6} alt="Restaurant"/></div>
                        <div className="name">The Big Barbeque</div>
                        <div className="type">
                            <div className="type_var">Biryani, North Indian, Mughlai, BBQ, Fast Food, Italian, Desserts</div>
                            <div className="type_cost">Rs.1400 for two</div>
                        </div>
                        <div className="area">Old Mahabalipuram Road (OMR), Chennai</div>
                        <div className="red">Opens at 11:30 am</div>
                    </div>
                    <div className="width hov">
                        <div><img className="img" src={img7} alt="Restaurant"/></div>
                        <div className="name">27 Culinary Street</div>
                        <div className="type">
                            <div className="type_var">Chinese, Street Food, Fast Food, North Indian</div>
                            <div className="type_cost">Rs.800 for two</div>
                        </div>
                        <div className="area">Mylapore, Chennai</div>
                        <div className="red">Opens at 12noon</div>
                    </div>
                    <div className="width hov">
                        <div><img className="img" src={img8} alt="Restaurant"/></div>
                        <div className="name">Bay 6</div>
                        <div className="type">
                            <div className="type_var">Continental, Asian, North Indian, Thai</div>
                            <div className="type_cost">Rs.1500 for two</div>
                        </div>
                        <div className="area">Akkarai, Chennai</div>
                        <div className="red">Opens at 12noon</div>
                    </div>
                </div> 
                </div> }

                
                {this.state.hotelOne && <div style = {{margin : '80px'}}>
                <div style = {{display : "flex"}}>
                <div style = {{width : '50%'}}><img className="img-hot" src={img1} alt="Restaurant"/></div>
                <div style = {{display : "flex", width : '50%'}}>
                    <div style = {{width : '50%'}}>
                        <div style = {{height : '49.5%', width : '97%', paddingRight: '1%', paddingBottom: '1%', paddingLeft: '2%'}}><img className="img-hot-side" src={img9} alt="Restaurant"/></div>
                        <div style = {{height : '49.5%', width : '97%', paddingRight: '1%', paddingLeft: '2%', paddingTop: '1%'}}><img className="img-hot-side" src={img11} alt="Restaurant"/></div>
                    </div>
                    <div>
                        <div style = {{height : '49.5%', width : '97%', paddingBottom: '1%', paddingLeft: '1%', paddingLeft: '2%', filter : 'brightness(0.5)'}}><img className="img-hot-side" src={img10} alt="Restaurant"/>
                        <div style = {{fontSize: 'inherit', lineHeight : '1.5', position : 'absolute', color : 'rgb(255, 255, 255)', top : '8rem', left : '110px', textAlign : 'center'}}>View Gallery</div>
                        </div>
                        <div style = {{height : '49.5%', width : '97%', paddingRight: '2%', paddingLeft: '1%', paddingTop: '1%', textAlign : 'center'}}><br></br><br></br><br></br><br></br><br></br><br></br>Add Photos</div>
                    </div>
                </div>
                </div>
                <div className="name">The Thief</div>
                <div className="hottype">North Indian, Continental, Italian, Asian, Desserts, Beverages</div>
                <div className="hottype">Nungampakkam, chennai</div>
                <div className="hottime" style={{paddingBottom : '10px'}}>Opens at 12 noon</div>
                <div style={{display : 'flex'}}>
                    <div className='head_order'>Overview </div>
                    <div className='head_order' onClick={this.orderonline}>Order Online </div>
                    <div className='head_order'>Reviews</div>
                    <div className='head_order'>Photos</div>
                </div>
                </div>
                }

                <div style={{display : 'flex', margin : '80px'}}>
                {this.state.orderonline && <div>
                    <div className="list">
                        <div className="listmenu" onClick={this.menu1}>Soup & Salad</div>
                        <div className="listmenu" onClick={this.menu2}>Main Course</div>
                        <div className="listmenu" onClick={this.menu3}>Desserts</div>
                        <div className="listmenu" onClick={this.menu4}>Rice</div>
                        <div className="listmenu" onClick={this.menu5}>Fried Rice & Noodles</div>
                    </div>
                </div> }

                {this.state.menu1 && <div style = {{marginLeft : '25px', width: '740px'}}> <div style = {{overflow : 'auto'}}> <div className="cont_title">Soup & Salad         </div> <div className = "soup_ttl"> <div> <div className="soup">Veg Tom Yum Soup               </div> </div> <div className = "add"> <button onClick={this.add.bind(this,1)}> ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Carrot and Cilantro with Almond Silver and Resto </div> <div>Rs.190</div> </div> <div className = "add"> <button onClick={this.add.bind(this,2)}> ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Roasted Pumpkin Chicken Soup   </div> <div>Rs.190</div> </div> <div className = "add"> <button onClick={this.add.bind(this,3)}> ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Greek Citrus Feta Salad     </div> <div>Rs.190</div> </div> <div className = "add"> <button onClick={this.add.bind(this,4)}> ADD</button> </div> </div> </div> </div> }

                {this.state.menu2 && <div style = {{marginLeft : '25px', width: '740px'}}> <div style = {{overflow : 'auto'}}> <div className="cont_title">Main Course          </div> <div className = "soup_ttl"> <div> <div className="soup">Paneer Lababdar                </div> </div> <div className = "add"> <button onClick={this.add.bind(this,5)}> ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Kaju Kumbh Masala                                </div> <div>Rs.350</div> </div> <div className = "add"> <button onClick={this.add.bind(this,6)}> ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Okra Do Pyaza                  </div> <div>Rs.280</div> </div> <div className = "add"> <button onClick={this.add.bind(this,7)}> ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Dal Makhani                 </div> <div>Rs.250</div> </div> <div className = "add"> <button onClick={this.add.bind(this,8)}> ADD</button> </div> </div> </div> </div> }

                {this.state.menu3 && <div style = {{marginLeft : '25px', width: '740px'}}> <div style = {{overflow : 'auto'}}> <div className="cont_title">Desserts             </div> <div className = "soup_ttl"> <div> <div className="soup">Moong Dal Halwa Samosa         </div> </div> <div className = "add"> <button onClick={this.add.bind(this,9)}> ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Classic Walnut Chocolate Brownie                 </div> <div>Rs.300</div> </div> <div className = "add"> <button onClick={this.add.bind(this,10)}>ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Caramel Cheesecake             </div> <div>Rs.300</div> </div> <div className = "add"> <button onClick={this.add.bind(this,11)}>ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Cappuccino Creme Brulee     </div> <div>Rs.300</div> </div> <div className = "add"> <button onClick={this.add.bind(this,12)}>ADD</button> </div> </div> </div> </div> }

                {this.state.menu4 && <div style = {{marginLeft : '25px', width: '740px'}}> <div style = {{overflow : 'auto'}}> <div className="cont_title">Rice                 </div> <div className = "soup_ttl"> <div> <div className="soup">Jeera Pulao                    </div> </div> <div className = "add"> <button onClick={this.add.bind(this,13)}>ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Ghee Rice                                        </div> <div>Rs.220</div> </div> <div className = "add"> <button onClick={this.add.bind(this,14)}>ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Veg Pulao                      </div> <div>Rs.220</div> </div> <div className = "add"> <button onClick={this.add.bind(this,15)}>ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Steamed rice                </div> <div>Rs.150</div> </div> <div className = "add"> <button onClick={this.add.bind(this,16)}>ADD</button> </div> </div> </div> </div> }

                {this.state.menu5 && <div style = {{marginLeft : '25px', width: '740px'}}> <div style = {{overflow : 'auto'}}> <div className="cont_title">Fried Rice & Noodles </div> <div className = "soup_ttl"> <div> <div className="soup">Veg Burnt Garlic Chilli Noodles</div> </div> <div className = "add"> <button onClick={this.add.bind(this,17)}>ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Prawns Burnt Garlic Chilli Noodles               </div> <div>Rs.250</div> </div> <div className = "add"> <button onClick={this.add.bind(this,18)}>ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Chicken Chilli Basil Fried Rice</div> <div>Rs.250</div> </div> <div className = "add"> <button onClick={this.add.bind(this,19)}>ADD</button> </div> </div> <div className = "soup_ttl"> <div> <div className="soup">Prawns Chilli Basil Fried   </div> <div>Rs.380</div> </div> <div className = "add"> <button onClick={this.add.bind(this,20)}>ADD</button> </div> </div> </div> </div> }  
                </div>



                {this.state.add &&
                    <div>

                        {this.state.cancel && <div>
                            {this.state.bill && this.state.order >=1 && <div style={{ position: "fixed", bottom: "30px", width: "100%", height: "100px", overflow: "auto" }}>

                                <div style={{ width: "100%", position: "fixed", bottom: "130px", backgroundColor: "skyblue", display: "flex" }}>
                                    <div>Your Orders</div>
                                    <button onClick={this.cancelbill} style={{ marginLeft: "85%" }}>X</button>
                                </div>

                                {this.state.item1  && <div> <div className = "order_color">Veg Tom Yum Soup                                     <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill1}  <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 1)}  >-</button>{this.state.number1} <button onClick={this.increment.bind(this, 1)}>  +</button></div></div></div></div>}
                                {this.state.item2  && <div> <div className = "order_color">Carrot and Cilantro with Almond Silver and Resto     <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill2}  <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 2)}  >-</button>{this.state.number2} <button onClick={this.increment.bind(this, 2)}>  +</button></div></div></div></div>}
                                {this.state.item3  && <div> <div className = "order_color">Roasted Pumpkin Chicken Soup                         <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill3}  <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 3)}  >-</button>{this.state.number3} <button onClick={this.increment.bind(this, 3)}>  +</button></div></div></div></div>}
                                {this.state.item4  && <div> <div className = "order_color">Greek Citrus Feta Salad                              <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill4}  <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 4)}  >-</button>{this.state.number4} <button onClick={this.increment.bind(this, 4)}>  +</button></div></div></div></div>}
                                {this.state.item5  && <div> <div className = "order_color">Paneer Lababdar                                      <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill5}  <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 5)}  >-</button>{this.state.number5} <button onClick={this.increment.bind(this, 5)}>  +</button></div></div></div></div>}
                                {this.state.item6  && <div> <div className = "order_color">Kaju Kumbh Masala                                    <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill6}  <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 6)}  >-</button>{this.state.number6} <button onClick={this.increment.bind(this, 6)}>  +</button></div></div></div></div>}
                                {this.state.item7  && <div> <div className = "order_color">Okra Do Pyaza                                        <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill7}  <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 7)}  >-</button>{this.state.number7} <button onClick={this.increment.bind(this, 7)}>  +</button></div></div></div></div>}
                                {this.state.item8  && <div> <div className = "order_color">Dal Makhani                                          <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill8}  <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 8)}  >-</button>{this.state.number8} <button onClick={this.increment.bind(this, 8)}>  +</button></div></div></div></div>}
                                {this.state.item9  && <div> <div className = "order_color">Moong Dal Halwa Samosa                               <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill9}  <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 9)}  >-</button>{this.state.number9} <button onClick={this.increment.bind(this, 9)}>  +</button></div></div></div></div>}
                                {this.state.item10 && <div> <div className = "order_color">Classic Walnut Chocolate Brownie                     <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill10} <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 10)} >-</button>{this.state.number10}<button onClick={this.increment.bind(this, 10)}> +</button></div></div></div></div>}
                                {this.state.item11 && <div> <div className = "order_color">Caramel Cheesecake                                   <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill11} <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 11)} >-</button>{this.state.number11}<button onClick={this.increment.bind(this, 11)}> +</button></div></div></div></div>}
                                {this.state.item12 && <div> <div className = "order_color">Cappuccino Creme Brulee                              <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill12} <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 12)} >-</button>{this.state.number12}<button onClick={this.increment.bind(this, 12)}> +</button></div></div></div></div>}
                                {this.state.item13 && <div> <div className = "order_color">Jeera Pulao                                          <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill13} <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 13)} >-</button>{this.state.number13}<button onClick={this.increment.bind(this, 13)}> +</button></div></div></div></div>}
                                {this.state.item14 && <div> <div className = "order_color">Ghee Rice                                            <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill14} <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 14)} >-</button>{this.state.number14}<button onClick={this.increment.bind(this, 14)}> +</button></div></div></div></div>}
                                {this.state.item15 && <div> <div className = "order_color">Veg Pulao                                            <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill15} <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 15)} >-</button>{this.state.number15}<button onClick={this.increment.bind(this, 15)}> +</button></div></div></div></div>}
                                {this.state.item16 && <div> <div className = "order_color">Steamed rice                                         <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill16} <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 16)} >-</button>{this.state.number16}<button onClick={this.increment.bind(this, 16)}> +</button></div></div></div></div>}
                                {this.state.item17 && <div> <div className = "order_color">Veg Burnt Garlic Chilli Noodles                      <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill17} <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 17)} >-</button>{this.state.number17}<button onClick={this.increment.bind(this, 17)}> +</button></div></div></div></div>}
                                {this.state.item18 && <div> <div className = "order_color">Prawns Burnt Garlic Chilli Noodles                   <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill18} <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 18)} >-</button>{this.state.number18}<button onClick={this.increment.bind(this, 18)}> +</button></div></div></div></div>}
                                {this.state.item19 && <div> <div className = "order_color">Chicken Chilli Basil Fried Rice                      <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill19} <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 19)} >-</button>{this.state.number19}<button onClick={this.increment.bind(this, 19)}> +</button></div></div></div></div>}
                                {this.state.item20 && <div> <div className = "order_color">Prawns Chilli Basil Fried                            <br></br><div style = {{marginTop: '1%'}}>{this.state.smallbill20} <div style={{ float: 'right', marginRight: "5%" }}> <button onClick={this.decrement.bind(this, 20)} >-</button>{this.state.number20}<button onClick={this.increment.bind(this, 20)}> +</button></div></div></div></div>}
                            </div>
                            }
                        </div>
                        }
                        {this.state.order >=1 && <div style={{ position: "fixed", bottom: "0", width: "100%", backgroundColor: "pink",color : "black", height: "60px" }}>
                            <div style={{ display: "flex" }}>
                                <button onClick={this.bill} style={{ margin: " 2% 0 0 5%" }}> ^ </button>
                                <div style={{ margin: "2% 0 0 5%" }}>Your Orders({this.state.order})</div>
                                <div style={{ margin: "2% 0 0 35%" }}> Sub Totals : {this.state.total}</div>
                            </div>
                        </div>
                        }
                    </div>
                    }
            </>
        );
    }
}

export default Zomato;
