import { useState } from "react";

function App() {
  //here we are intializing state
  const [form, setForm] = useState({
    amount: 0,
    description: '',
    date: null
  });

  //function made to deal with target value
  //this uses onChange function which on change updates the valus accessed using e.target.value
  function handelInput(e) {
    //we have set the value to the form value and we update form.amount after each onchange which changes the value in form
    // setForm({ ...form, amount: e.target.value }); hard coding
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  //function which is called after the submission of the
  async function handelSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: form,
    })
    console.log(res);
  }

  return (
    <div>
      <h1>Transaction form</h1>
      {/* creatinh a function and calling it after submission */}
      <form onSubmit={handelSubmit}>
        <input type="number" name="amount" id="amount" placeholder="Enter Transaction Number" onChange={handelInput} value={form.amount} />
        <input type="text" name="description" id="description" placeholder="Enter the Desription of transaction" onChange={handelInput} value={form.description} />
        <input type="date" name="date" id="date" onChange={handelInput} value={form.date} />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default App;
