import Head from "next/head";
import Header from "../components/header";
import SimpleSlider from "../components/carousel-banner";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="./static/style-index.css" />
          <link rel="stylesheet" href="./static/style-banner.css" />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <title>nguoibangiay.demo</title>
        </Head>
        <Header />
        <SimpleSlider />
      </div>
    );
  }
}
export default Index;
