// let calculator=function(){

//     this.firstName="amgad";
//     this.secondName="beter";
//     this.writeText=function(){
//         console.log("Bla Bla Bla...");
//     }
// }

//     let calc=new calculator();

//     calc.writeText();

let Calculator={

    InputText:document.getElementById("txtinput"),
    firstvalue:null,
    Operator:0,
    newOperation:true,
    Currentvalue:[],
    WriteText:function(button){
        if(Calculator.InputText.value!=="" && 
           this.newOperation===false){
            Calculator.InputText.value=button.value;
            newOperation=true
            return;
        }
        else
        Calculator.InputText.value+=button.value;
    
    },
    OperatorClick:function(CurrentOperator){
        this.firstvalue=parseInt(Calculator.InputText.value);
        Calculator.InputText.value="";
        this.Operator=CurrentOperator;
    },
    
    calcolate:function(){
        let secondvalue=parseInt(Calculator.InputText.value);    
        if(this.Operator === '1'){
        result=this.firstvalue+secondvalue;
        }

        else if(this.Operator === '2'){
            result=this.firstvalue-secondvalue;
            }
        else if(this.Operator === '3'){
            result=this.firstvalue*secondvalue;
            }    
        else if(this.Operator === '4'){
            result=this.firstvalue/secondvalue;
        }

            Calculator.InputText.value=result;
            this.Currentvalue.push(result);
            // this.Currentvalue.pop();
            // this.Currentvalue.splice(2,1,'Amgad','nour')
            //insert 2 item in posation 1 the item is 5
            // this.Currentvalue.slice(0,1)
            // to delet an element from posation 1
            console.log(this.Currentvalue);
            let valuesInScreen=document.getElementById("DivValues");
            valuesInScreen.innerHTML="";
            for(let i=0; i<this.Currentvalue.length; i++){
                valuesInScreen.innerHTML+="<li>" + this.Currentvalue[i] + "</li>";
              }


            this.firstvalue=null;
            this.Operator=0;
            this.newOperation=false; 
    
        },
        clearData:function(){
        this.InputText.value="";
        this.firstvalue=null;
        this.Operator=0;
        this.secondvalue=false;
        }
    }

   
