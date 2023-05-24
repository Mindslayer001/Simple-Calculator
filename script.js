let flag=0;
        let output = document.getElementById("ot");
        function display(num){
            if (flag==1)
            {
                output.value="num";
                output.value=num;
                flag=0
            }
            else{
                output.value+= num;
            }    
        }

        function calculate(){
            try {
                output.value = eval(output.value);
                flag =1;
            }
            catch(err)
            {
                output.value="";
                alert("INVALID");
            }
        }

        function del(){
            output.value = output.value.slice(0, -1);      
        }
        
        function clr(){
            output.value = "";
        }