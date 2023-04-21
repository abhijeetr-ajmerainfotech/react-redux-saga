import React, { useEffect } from "react";

const Zoho = () => {
  useEffect(() => {
    const element = document.getElementById("zsiq_float");
    if (!element) {
      window.$zoho = {} || window.$zoho;
      window.$zoho.salesiq = window.$zoho.salesiq || {
        widgetcode:
          "adb5aa0995949375e76a6c57d19893dc27fd77f732a32a829c62ed9d42fec8c0",
        values: {},
        ready: function() {},
      };
      const zohoScript = document.createElement("script");
      zohoScript.type = "text/javascript";
      zohoScript.id = "zsiqscript";
      zohoScript.defer = true;
      zohoScript.src = "https://salesiq.zoho.com/widget";
      const t = document.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(zohoScript, t);
      zohoScript.onload = function() {
        window.$zoho.salesiq.ready(function() {
          window.$zoho.$ZSIQChat.init();
        });
      };
    }
  }, []);

  return <div></div>;
};

export default Zoho;
