import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};


const Project = ({ title, titles, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center  text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-white">{title}</p>
        <p className="text-2xl font-opensans">{titles}</p>
        <p className="mt-20 font-normal bg-yellow py-2 px-4 rounded-[10px]">
        {description}
        </p>
      </div>

      <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        I'm excited to showcase my latest projects, 
        which are built using the latest technologies in frontend development.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="project 1"
            titles="DS-Sport Ecommerce"
            description={
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/drilon305/dsport-ecommerce"
              >
                GITHUB
              </a>
            }
          />
          <Project
            title="project 2"
            titles="DSoft Material-UI"
            description={
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/drilon305/dsoft-materialui"
              >
                GITHUB
              </a>
            }
          />

          {/* ROW 2 */}
          <Project title="project 3" titles="Sushi Website"
            description={
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/drilon305/responsive-sushi-website"
              >
                GITHUB
              </a>
            } />
          <Project title="project 4" titles="NFT Landing Page"
            description={
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/drilon305/nftlanding-reactjs"
              >
                GITHUB
              </a>
            } />
          <Project title="project 5"  titles="Evogym Landing Page"
            description={
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/drilon305/evogym-fitness-typescript"
              >
                GITHUB
              </a>
            } />

          {/* ROW 3 */}
          <Project title="project 6"  titles="Lartana Restaurant"
            description={
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/drilon305/lartana-restaurant"
              >
                GITHUB
              </a>
            } />
          <Project title="project 7"  titles="Scardus Hotel"
            description={
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/drilon305/scardus-hotel"
              >
                GITHUB
              </a>
            } />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
