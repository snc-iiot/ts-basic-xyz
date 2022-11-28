{
  //   const promise = Promise.reject(new Error("reason for rejection"));

  //   promise
  //     .then((value) => console.log(value))
  //     .catch((error) => console.log("Hello World"));

  function uploadPDF(file: string) {
    console.log("กำลังอัพโหลดไฟล์: " + file);
    return new Promise((resolve, reject) => {
      if (file.slice(-4) === ".pdf") {
        setTimeout(() => {
          resolve("การอัพโหลดไฟล์สำเร็จ");
        }, 3000);
      } else {
        reject("การอัพโหลดไฟล์ล้มเหลว");
      }
    });
  }

  //   console.log("1");
  //   setTimeout(() => console.log("2"), 2000);
  //   console.log("3");

  //   uploadPDF("file1.pdf")
  //     .then((msg) => {
  //       console.log(msg);
  //       uploadPDF("file2.png")
  //         .then((msg) => {
  //           console.log(msg);
  //           uploadPDF("file3.pdf").then(console.log).catch(console.log);
  //         })
  //         .catch(console.log);
  //     })
  //     .catch(console.log);
}
