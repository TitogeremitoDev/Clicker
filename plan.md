1. **Explore `clicker.js` to identify DOM query optimizations**
   - Identify variables queried multiple times using `document.getElementById` and `document.querySelector` inside frequent loops (like `dañocontinuo`) and event listeners.
   - For example, `document.getElementById("salud")`, `document.getElementById("salud-tiene-texto")`, `document.getElementById("salud-total-texto")`, `document.getElementById("hit1")`, `document.getElementById("gritoboss1")`, `document.querySelector(".mult-daño-texto")`, `document.querySelector(".oro-texto")`, `document.querySelector(".mult-puntos-texto")`, `document.getElementById('ataquealboss')`.

2. **Implement caching object `ui`**
   - Create a global `ui` object to cache these elements once when the script executes:
     ```javascript
     const ui = {
         salud: document.getElementById("salud"),
         saludTieneTexto: document.getElementById("salud-tiene-texto"),
         saludTotalTexto: document.getElementById("salud-total-texto"),
         hit1: document.getElementById("hit1"),
         gritoboss1: document.getElementById("gritoboss1"),
         multDañoTexto: document.querySelector(".mult-daño-texto"),
         oroTexto: document.querySelector(".oro-texto"),
         multPuntosTexto: document.querySelector(".mult-puntos-texto"),
         ataquealboss: document.getElementById('ataquealboss')
     };
     ```
   - Update references in `clicker.js` to use `ui.<element>` instead of re-querying the DOM.

3. **Verify impact using a script**
   - Create a temporary node script using `jsdom` to benchmark the original vs cached queries in the `dañocontinuo` function loop.
   - Run the script and measure performance.

4. **Complete pre commit steps**
   - Run verification instructions and clean up artifacts.

5. **Submit PR**
   - Submit PR with expected performance format.
