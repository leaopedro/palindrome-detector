var React = require("react");
var Helper = require('./Helper');

 var Box = React.createClass({
    getInitialState: function () {
        return{
            input: ''
        };
    },
    validateInput: function (e) {
        var text = e.target.value;
        var clean = Helper.removeSymbols(text.toLowerCase());
        var reverse = Helper.reverse(clean);
        this.setState({
            input: text,
            clean: clean,
            reverse: reverse,
            isPalindrome: (clean === reverse)
        });
    },

    render: function(){
        var classNm = "main-panel text-center";
        var validText = "";
        if(this.state.input !== ''){
            if(this.state.isPalindrome){
               classNm = "main-panel palindrome text-center";
                validText = "É um Palíndromo!!";
            }else{
                classNm = "main-panel not-palindrome text-center";
                validText = "Não é um Palíndromo!!";
            }
        }
     return(
       <div className="app-container" >
           <div className={classNm}>
                <h1>Palindrome Detector 1.0</h1>
                <div className="input-container">
                    <p className="instructions">Digite uma frase e direi se é um palíndromo ou não!</p>
                    <input type="text" onChange={this.validateInput} />
                    <p className={(this.state.isPalindrome)? "status palindrome":"status not-palindrome"} >{validText}</p>
                </div>
           </div>
       </div>
     );
    }
 });


module.exports = Box;
