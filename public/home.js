function Home(){
    return (
      <Card
        txtcolor="black"
        header="Bad Bank Application"
        title="Welcome to the bank, create an account or login to get started."
        text="Use the navigation bar to complete desired actions."
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />
    );  
  }