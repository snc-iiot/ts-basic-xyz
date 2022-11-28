{
  function uploadPDF(file: string) {
    console.log("กำลังอัพโหลดไฟล์: " + file);
    return new Promise((resolve, reject) => {
      if (file.slice(-4) === ".pdf") {
        setTimeout(() => {
          resolve("การอัพโหลดไฟล์สำเร็จ");
        }, 3000);
      } else {
        setTimeout(() => {
          reject("การอัพโหลดไฟล์ล้มเหลว");
        }, 1500);
      }
    });
  }

  async function main() {
    try {
      const msg1 = await uploadPDF("file1.pdf");
      console.log(msg1);
      const msg2 = await uploadPDF("file2.png");
      console.log(msg2);
      const msg3 = await uploadPDF("file3.pdf");
      console.log(msg3);
    } catch (error) {
      console.log(error);
    }
  }

  //   async function main() {
  //     try {
  //       //! ทำพร้อมกัน
  //       const res = await Promise.all([
  //         uploadPDF("file1.pdf"),
  //         uploadPDF("file2.pdf"),
  //         uploadPDF("file3.pdf"),
  //       ]);

  //       res.forEach((job) => console.log(job));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  main();
}
