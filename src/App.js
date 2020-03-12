import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
          <SignUp/>
          
    </div>
  );
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameClass: "",
      lastNameClass: "",
      emailClass: "",
      passwordClass: ""
    };
    let  patern_3 = /\d+/g;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    if(this.state.firstNameClass=="" || this.state.lastNameClass==""  || this.state.emailClass===""  || this.state.passwordClass===""){
      alert('Please fill all the feilds');
      event.preventDefault();
      return 0;
  } 
  var err="";
  if(this.state.firstNameClass=="alert-danger"){
      err="First Name - Must not contain any numbers (0-9) \n";
  }
  if(this.state.firstNameClass=="alert-danger"){
      err +="Last Name - Must not contain any numbers (0-9) \n";
  }
  if(this.state.emailClass=="alert-danger"){
      err +="Email address - Must be a valid email ID \n";
  }
  if(this.state.passwordClass=="alert-danger"){
      err +="Password - Must be at least 8 characters long. Only numbers (0-9) and letters (A-Z, a-z) are allowed \n";
  }
  if(err!=""){
      alert(err);
  } else {
      alert('A name was submitted');
  }
    event.preventDefault();
  }

   handleChangeFirstName = (e) => {
      var re=e.target.value.match(this.patern_3);
      
      if(re.input) {
        this.setState({firstNameClass: "alert-danger"});  
      } else {
        this.setState({firstNameClass: "alert-success"});
      }
    }
      handleChangeLastName = (e) => {
        var re=e.target.value.match(this.patern_3);
        if(re.input) {
          this.setState({lastNameClass: "alert-danger"});  
        } else {
         this.setState({lastNameClass: "alert-success"});
        }
      }
      handleChangeEmail = (e) => {
          var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(e.target.value);
          if(re.input) {
            this.setState({emailClass: "alert-success"});
          } else {
            this.setState({emailClass: "alert-danger"});  
          }
      }
      handleChangePassword = (e) => {
        var patern_2=  /^[0-9a-zA-Z]+$/;
        var patern_1 = /^[0-9a-zA-Z]{8,}/;
        var re=e.target.value.match(patern_1);
        if(!re) {
          this.setState({passwordClass: "alert-danger"});
        }else{
          var re1=e.target.value.match(patern_2); 
          if(!re1.input) {
            this.setState({passwordClass: "alert-danger"}); 
          }else{
            this.setState({passwordClass: "alert-success"});
          }
        }
      }

  render() {
    const mystyle = {
      background: "#637a91",color:"#fff"
    };
    
    const classesFName ="form-control txt_box name_class "+this.state.firstNameClass;
    const classesLName ="form-control txt_box name_class "+this.state.lastNameClass;
    const classesEmail ="form-control txt_box name_class "+this.state.emailClass;
    const classesPassword ="form-control txt_box name_class "+this.state.passwordClass;

     return (
      <div className="container">
      <div className="row justify-content-center align-items-center h-100">
      <div className="col-sm-5 col-md-5 " style={{"border":"1px solid #637a91"}}>

      <div className="row">
            <div className="col-sm-12 col-md-12" style={mystyle}>
                <div className="mx-auto p-2" style={{"width": "200px"}}>
                    Get started today! 
                  </div> 
            </div>
        </div>

        <form  method="POST" onSubmit={this.handleSubmit}>
        <div className="form-group">
              <div className="row mt-3">
                    <div className="col-sm-6 col-md-6" >
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" className={classesFName} id="firstName" onChange={this.handleChangeFirstName}  />
                    </div>
                    <div className="col-sm-6 col-md-6">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" className={classesLName} id="lastName" onChange={this.handleChangeLastName} />
                    </div>
              </div>

              <div className="row mt-2">
                  <div className="col-sm-6 col-md-6" >
                  <label htmlFor="emailID">Email address</label>
                  <input type="text" className={classesEmail} id="email_address" onChange={this.handleChangeEmail} />
                  </div>
                  <div className="col-sm-6 col-md-6">
                  <label htmlFor="user_password">Password</label>
                  <input type="password" className={classesPassword} id="user_password" onChange={this.handleChangePassword} />
                  </div>
              </div>
              <div className="row">
                    <div className="col-sm-12 col-md-12" >
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-12" >
                        <button id="btn_claim" className="btn btn-success custom_color" style={{"width":"100%"}}> Claim your free trial&nbsp;&nbsp;&nbsp;&#10151;</button>
                    </div>
                    <div className="col-sm-6 col-md-12 mt-1 link_class" >
                        You are agreeing to our <a href="#"> Terms and Services</a>
                    </div>
                    
                </div>

          </div>
        </form>

      </div>  
      </div>
      </div>
     );
  }
}

export default App;
