import React from 'react';
import './About.css';
import teaLeaf from './images/leaf2.jpg';
import teaFlower from './images/tea flower.jpg';

const About = () => {
  return (
    <div>
      <div class="containerleaf">
        <img src={teaLeaf} alt="Tea Leaf" class="imageleaf" />
        <div class="overlay">
          <div class="textleaf">
            <p>Tea Leaf</p>
            <p>
              Tea leaves are the harvested and dried leaves of the Camellia
              sinensis plant, which is native to East Asia. These leaves are
              the primary ingredient for various types of tea, including black,
              green, white, and oolong. Rich in antioxidants and containing
              caffeine, tea leaves are steeped in hot water to produce the
              popular beverage enjoyed worldwide. The flavor, aroma, and
              characteristics of tea can vary widely based on factors such as
              processing methods and growing conditions.
            </p>
          </div>
        </div>
      </div>

      <div class="containerflower">
        <img src={teaFlower} alt="Flower" class="imageflower" />
        <div class="overlay">
          <div class="textflower">
            <p>Tea Flower - Camellia</p>
            <p>
            Tea flowers are the blossoms of the tea plant, Camellia sinensis. 
            They are delicate and can be white or pale pink. 
            While not a primary focus in tea production, tea flowers are appreciated for their aesthetic value in gardens. 
            The main emphasis in the tea industry is on harvesting and processing the leaves to produce various types of tea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
