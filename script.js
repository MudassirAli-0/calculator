
      let myCalculator = document.querySelector(".myCal");

      let output;

      let myKeys = [
        ["1", "2", "3", "+"],
        ["4", "5", "6", "-"],
        ["7", "8", "9", "*"],
        ["C", "0", "=", "/"],
      ];

      const myOper = ["+", "-", "*", "/"];

      output = document.createElement("div");
      output.classList.add("output");
      output.innerHTML = "0";
      myCalculator.appendChild(output);

      for (let y = 0; y < myKeys.length; y++) {
        let div = document.createElement("div");
        div.classList.add("rows");

        // console.log(myKeys[y].length);
        myCalculator.appendChild(div);

        for (let x = 0; x < myKeys[y].length; x++) {
          let btn = document.createElement("div");
          btn.innerHTML = myKeys[y][x];
          btn.classList.add("btns");

          div.appendChild(btn);

          btn.addEventListener("click", btnHit);
        }
      }

      function btnHit() {
        let myValue = this.innerText;
        let myCal = output.innerText;

        if (myCal == "0") {
          myCal = "";
        }

        if (myValue == "=") {
          myCal = eval(myCal);
        } else {
          let lastChar = myCal.substring(myCal.length - 1);

          if (myOper.includes(myValue)) {
            myCal = eval(myCal);
          }

          myCal = myCal + myValue;
        }

        if (myValue == "C") {
          myCal = 0;
          location.reload();
        }

        output.innerText = myCal;
      }

      //   function btnHit() {
      //     let myValue = this.innerText;
      //     let myCal = output.innerText;

      //     if (myCal == "0") {
      //       myCal = "";
      //     }
      //     if (myValue == "=") {
      //       myCal = eval(myCal);
      //     } else {
      //       let lastChar = myCal.substring(myCal.length - 1);

      //       if (myOper.includes(myValue)) {
      //         myCal = eval(myCal);
      //       }

      //       myCal = myCal + myValue;
      //     }

      //     if (myValue == "C") {
      //       myCal = 0;
      //       location.reload();
      //     }

      //     output.innerText = myCal;
      //   }

      //   function btnHit(e) {
      //     let myValue = this.innerText;
      //     let myCal = output.innerText;

      //     if (myCal == "0") {
      //       myCal = "";
      //     }
      //     if (myValue == "=") {
      //       myCal = eval(myCal);
      //     }

      //     ////////////////////////////////////////////////
      //     else {
      //       let lastChar = myCal.substring(myCal.length - 1);

      //       if (myOper.includes(myValue)) {
      //         myCal = eval(myCal);
      //       }

      //       myCal = myCal + myValue;
      //     }

      //     if (myValue == "C") {
      //       myCal = 0;
      //     }

      //     output.innerText = myCal;
      //   }

      //   function btnHit(e) {
      //     let myValue = this.innerText;
      //     let myCal = output.innerText;

      //     console.log(myValue, myCal);

      //     if (myCal == "0") {
      //       myCal = "";
      //     }
      //     if (myValue == "=") {
      //       myCal = eval(myCal);
      //       console.log(myCal, "hello");
      //     } else {
      //       let lastChar = myCal.substring(myCal.length - 1);
      //       console.log(lastChar, "last Character");

      //       if (myOper.includes(myValue)) {
      //         myCal = eval(myCal);
      //       }

      //       myCal = myCal + myValue;

      //       console.log(myCal, "My calculation");
      //     }

      //     if (myValue == "C") {
      //       myCal = 0;
      //       location.reload();
      //     }

      //     output.innerText = myCal;
      //   }