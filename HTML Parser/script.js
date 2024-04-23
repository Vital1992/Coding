// # Ramp Challenge

// Thanks for applying to Ramp. Solve this CTF[1] challenge and add the result to your application.

// We recommend opening this file with a Markdown viewer. (https://www.google.com/search?q=markdown+viewer)

// ## Instructions

// 1. Open this [link](https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge)
// 2. Find a hidden URL within the HTML
//    - Each character of the URL is given by this DOM tree, in this specific order. You need to find (in order) all of the occurrences and join them to get the link.
//    - The asterisk **(\*)** is a wildcard representing zero or more characters that can be present in the string. These characters are irrelevant to the result and should be ignored.
//    - There can be zero or more DOM nodes between each valid tag. These nodes are irrelevant to the result.
//    - Any additional attribute that doesn't interfere with the described pattern can be safely ignored.

// Pattern of the DOM tree for each valid character of the URL

// ```html
// <code data-class="23*">
//   <div data-tag="*93">
//     <span data-id="*21*">
//       <i class="char" value="VALID_CHARACTER"></i>
//     </span>
//   </div>
// </code>
// ```

// (_To validate this step, you should be able to open the URL and get an English word. This means you have captured the flag!_ 🥳)

// 3. Create a CodeSandbox React application
// 4. Make an HTTP request to URL obtained in step 2 to load the flag into a React component
//    - Don't use any external libraries. Use browser APIs
//    - Render a "Loading..." text while the request is ongoing
// 5. Render the flag you loaded in step 4 with the following conditions:
//    - Simulate a typewriter effect with a half second delay between each character. _Start showing nothing and then display characters one by one until the full string is displayed._
//    - No style required
//    - Render the flag a list, where each character is a list item
//    - Animation should trigger after you load the flag
//    - Animation should run only once
//    - Use React APIs only. Don't use CSS or external libraries

// Bonus: Add as a comment the script you used to to get the URL in step 2

// ## Submission

// Paste the flag you captured in step 2 and the link to your CodeSandbox in the job application with the following format:

// `<FLAG> - <LINK>`

// We're aware answers here might eventually be leaked and we'll probably have to refresh this every couple months or so, but please keep in mind it'll be very easy to tell once that happens and will only result in slowing down our ability to process applications - so please keep the result to yourself.

// \[1\]: https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)

import "./styles.css";
import { useEffect, useState } from "react";

function TypewriterEffect({ text }) {
  const [displayedChars, setDisplayedChars] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < text.length) {
      const interval = setInterval(() => {
        setDisplayedChars(displayedChars + text[index]);
        setIndex(index + 1);
        if (index === text.length) {
          clearInterval(interval);
        }
      }, 500);

      //Clearing the interval
      return () => clearInterval(interval);
    }
  }, [displayedChars]);

  return <span>{displayedChars}</span>;
}

export default function App() {
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/676c75"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        setDocumentData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  if (!documentData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TypewriterEffect text={documentData} />
    </div>
  );
}


// HTML Parser

// function extractURL(html) {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, 'text/html');

//   let url = '';

//   // Query all <code> elements with data-class containing '23'
//   doc.querySelectorAll('code[data-class*="23"]').forEach(code => {
//       // Within each <code>, query <div> elements with data-tag containing '93'
//       code.querySelectorAll('div[data-tag*="93"]').forEach(div => {
//           // Within each <div>, query <span> elements with data-id containing '21'
//           div.querySelectorAll('span[data-id*="21"]').forEach(span => {
//               // Within each <span>, find <i> elements with class 'char'
//               const charElement = span.querySelector('i.char');
//               if (charElement) {
//                   url += charElement.getAttribute('value');
//               }
//           });
//       });
//   });

//   return url;
// }

// const htmlContent = `<html code goes here>`
// const extractedURL = extractURL(htmlContent);
// console.log(extractedURL);