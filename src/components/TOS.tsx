import { useNavigate } from "react-router-dom";
import "./styles/TOS.css"

function TOS() {
  const navigate = useNavigate();

  /**
   * Navigate to the previous page.
   */
  const goback = () => {
    navigate("../testing")
  };

  return (
    <main id="tos">
      <button onClick={goback}>Go back</button>
      <h1 className="blue">Code of Conduct</h1>
      <p>
        We want to build the best party ever for you. To make sure that
        everything runs smoothly and fun we have a few rules for everyone.
        Please make yourself familiar with them. Most are common sense but we
        still want to be sure you know what to expect. The rules will be
        enforced by the Party Crew. Please listen to them at all times and
        follow their requests. If you have any problem with one of the crew
        members, please let one of the party staff members know.
      </p>
      <ul>
        <li>Always treat each other with respect.</li>
        <li>Always follow the directions by the Party Crew.</li>
        <li>You are liable for any damage you might cause.</li>
        <li>We do not accept any kind of harassment, period.</li>
      </ul>
      <p>
        While we are inside a location we are still visible for the other
        public. Please behave like that and give the best impression.
      </p>
      <h2 className="pink">Registration</h2>
      <ul>
        <li>You have to be at least 18 on the day of the party to attend.</li>
        <li>
          Only staff and registered attendees are allowed inside the location
        </li>
        <li>
          Attendees are required to wear their badge and lanyard at all times
          during the party.
        </li>
        <li>Badges need to be shown upon request by staff.</li>
      </ul>

      <h2 className="yellow">Location Rules</h2>
      <ul>
        <li>
          It is not allowed to climb over any railings or walk on parts that are
          off limit for attendees.
        </li>
        <li>
          It is not allowed to bring your own beverages or food to the party.
        </li>
        <li>
          It is not allowed to smoke outside of the designated smoke area.
        </li>
        <li>
          It is not allowed to bring any dogs, cats or other pets onboard.
        </li>
        <li>
          Please do not use personal music players while at the location. We
          have music for a reason.
        </li>
      </ul>
      <h2 className="blue">Clothing and Decency</h2>
      <ul>
        <li>
          Nudity exceeding the equivalent of bathing suits is not allowed.
        </li>
        <li>
          Sexual behavior that goes beyond a mere display of affection is not
          allowed in public.
        </li>
        <li>
          Display of fetish gear is not permitted in public, even if it is part
          of a costume.
        </li>
      </ul>
      <h2 className="pink">Alcohol and Drugs</h2>
      <ul>
        <li>It is forbidden to bring or use drugs to the party.</li>
        <li>
          If we find you in the possession of or distributing illegal or
          controlled substances we will notify the local authorities and the
          venue FORT33.
        </li>
        <li>
          Smoking and vaping is only allowed in the designated smoking areas.
        </li>
      </ul>
      <h2 className="yellow">Photography and Video</h2>
      <p>
        Everyone is welcome to take pictures and capture memories for private
        use. Selling or using the videos and pictures for profitable companies
        is not allowed.
      </p>
    </main>
  );
}

export default TOS;
