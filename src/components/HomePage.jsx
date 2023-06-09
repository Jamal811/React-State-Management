import Footer from "./Footer";
import Title from "./Title";
import UseBusinessNameContext from "./UseBusinessNameContext";

function HomePage() {
  const { businessName, setBusinessName } = UseBusinessNameContext();

  const handleChange = (e) => {
    setBusinessName(e.target.value);
  };
  return (
    <>
      <div className="container">
        <Title />
        <div className="inner-container">
          <div className="fieldset">
            <label>BusinessName</label>
            <input value={businessName} onChange={handleChange} />
          </div>
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            impedit vero. Aut natus, asperiores inventore repellat, saepe beatae
            commodi magni dolore veritatis doloribus dolores, quos repudiandae
            consequatur aspernatur quasi optio quod nam fugiat vel numquam totam
            quidem similique quisquam aperiam! Cupiditate nemo voluptas
            praesentium accusantium exercitationem labore veniam sed provident
            eos! Impedit animi quam corporis suscipit vitae veritatis
            praesentium repudiandae nulla facilis, nesciunt enim sed? Aspernatur
            minus eum ipsum reiciendis, cumque sunt enim! Facere aspernatur
            voluptates dolorem voluptate qui iusto enim modi inventore eius
            iure, omnis nisi soluta vel dolores ex dignissimos eligendi maxime
            quod rerum est? Assumenda, qui reprehenderit.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
