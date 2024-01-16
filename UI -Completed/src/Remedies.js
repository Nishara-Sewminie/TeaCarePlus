import React, { useState } from 'react';
import './Remedies.css';

const Remedies = () => {
  const [remediesData, setRemediesData] = useState([
    { name: 'Blister Blight', description: 'Copper fungicides are effective against the blister blight as a preventive measure and copper on the leafs surface will not prevent a fungus from developing a blister once it is inside the leaf. Copper fungicides (Wettable Powders) with 50% (w/w) metallic copper in oxide, oxychloride, or hydroxide forms have been suggested as a spray in Sri Lanka (Balasuriya, 2008). Copper fungicides, in whatever form they take, remain the cheapest and most effective. Cu must be sprayed frequently for effective control because they are merely protective.In Sri Lanka, spraying of 90-120 g copper fungicides every four days or systemic fungicides (25 ml in 45 L of water) every ten days for about 30,000 plants (250 m² nursery area) have been advised.Spray of copper fungicides @ 370-490 g every 4-5 days or systemic fungicides @ 85 ml every 10 days in 170 L of water per hectare using knapsack sprayers, or in 30-45 L per hectare, using mist-blowers, up to the time of tipping, have been recommended for tea bushes recovering from pruning in Sri Lanka. Copper fungicides, applied once every 7-10 days @ 220-420 g or systemic fungicides, applied once every 10-14 days @ 85 ml in 170 L of water per hectare using knapsack sprayers or in 30-45 L of water per hectare using mist-blowers, respectively have been found to successfully control the disease in plucking tea (Balasuriya, 2008).It has been recommended to avoid dense shading in mist pockets. This does not mean a total absence of shade trees from the mist pockets; rather, a density management of shade trees during the blister blight pron season.' },
    { name: 'Brown Blight', description: 'In the event of an outbreak of brown blight, the copper fungicides may prove effective in preventing the disease from spreading. Application of plant activators may help in imparting disease resistance against Anthracnose.' },
    // ... add more remedies
  ]);

  return (
    <div>
      <table className="remedies-table">
        <thead>
          <tr>
            <th>Disease Name</th>
            <th>Remedies</th>
          </tr>
        </thead>
        <tbody>
          {remediesData.map((remedy) => (
            <tr key={remedy.name}>
              <td>{remedy.name}</td>
              <td>{remedy.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Remedies;
