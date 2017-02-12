# jFormz
<p>jFormz is a JavaScript Prototype Class for making forms.  jFormz allows you to generate HTML forms dynamically! These forms can then be used with JS, PHP or any other web language once the form is rendered!</p>


You can find documentation on this website.

http://jformz.com

<h2>Usage</h2>

        
     <script src='jFormz.js'></script>
        
        <script>
        //INSTANTIATE
        var jf = new Jformz();
        
        //BUILD A FORM
        function makeSimpleLogin(){
        var view='';
        view += jf.openForm('#method','#action','','form','');
        view += jf.formLabel('Username','label');
        view += jf.inputText('username','form-control','uname','','','require');
        view +='jf.br()'; 
        view += jf.formLabel('Password','label');
        view += jf.inputPassword('pass','form-control','pword','','','require');
        view +='jf.br()'; 
        view += jf.submitBtn('','','form-control','Login')    
        view += jf.closeForm();
        return view;
        }
        
OR

        function makeSimpleLogin(){
        var view = jf.openForm('#method','#action','','form','')
        +jf.formLabel('Username','label')+jf.inputText('username','form-control','uname','','','require')
        +jf.br()
        +jf.formLabel('Password','label')+jf.inputPassword('pass','form-control','pword','','','require')
        +jf.br()+jf.submitBtn('','','form-control','Login')
        +jf.closeForm();    
        return view;
    }
     //USAGE Assumes you have a div with id="login"
     jf.showView('login',makeSimpleLogin()); 
        
        </script>



