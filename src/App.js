import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { addFeatures } from "./actions/details";

const App = ({ car, additionalFeatures, additionalPrice, addFeatures }) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={additionalFeatures}
          addFeatures={addFeatures}
        />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addFeatures
};

function mapStateToProps(state) {
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.car
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
