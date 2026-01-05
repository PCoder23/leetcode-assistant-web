"use client";
import Script from "next/script";
import { useEffect } from "react";

interface GenerateZohoJwtProps {
  email: string;
  secretKey: string;
}

const generateZohoJwt = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibm90X2FmdGVyIjoxNzY3NjE2MTM1ODUxLCJub3RfYmVmb3JlIjoxNzY3NjE1ODM1ODUxLCJlbWFpbCI6InByYW5hdi5qQGdtYWlsLmNvbSIsImZpcnN0X25hbWUiOiJQcmFuYXYiLCJsYXN0X25hbWUiOiJKaGEgV2FyZGVuIiwiaWF0IjoxNzY3NjE1ODM1fQ.3NdkjAAhlqpsZAifyCBUKJSqtcE4YLPdIUJQD1ZFDcA";

  return token;
};

const ZohoDeskWidget = () => {
  const getJwtTokenCallback = (successCallback: any, failureCallback: any) => {
    // Fetch the JWT token from your server or authentication service
    // fetch('http://localhost:5000/api/v1/tests/get-zoho-token') // replace with your actual endpoint
    //     .then((response) => response.json())
    //     .then((data) => {
    //         // Pass the JWT token to the success callback
    //         successCallback(data.token);
    //     })
    //     .catch((error) => {
    //         // Handle any errors and pass the error to the failure callback
    //         failureCallback(error);
    //     });
    generateZohoJwt()
      .then((token) => {
        console.log("Generated JWT Token:", token);
        successCallback(token);
      })
      .catch((error) => {
        console.error("Error generating JWT Token:", error);
        failureCallback(error);
      });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const readyFn = (window as any).ZohoDeskAsapReady;
    if (!readyFn || typeof readyFn !== "function") return;

    const handler = () => {
      const asap = (window as any).ZohoDeskAsap;
      if (!asap) return;
      console.log("readyFn called");
      // Invoke login with JWT token retrieval
      asap.invoke("login", getJwtTokenCallback);
      console.log("Invoked login");
      asap.set("ticket.form.prefillValues", {
        "191794000000010772&&&191794000000011350": {
          contactId: { defaultValue: "Pranav test" },
          email: {
            defaultValue: "pranav.j@wardenera.com", // email is optional in our system
            isHidden: true,
          },
          phone: { defaultValue: "1234567890", isHidden: true },
          priority: { defaultValue: "low", isHidden: true },
          productId: { isHidden: true },
        },
      });
    };

    (window as any).ZohoDeskAsapReady(handler);
  }, []);
  // TODO: Enable Zoho Desk widget for production after review
  return (
    <Script
      id="zoho-desk-bootstrap"
      dangerouslySetInnerHTML={{
        __html: `
          var d=document;s=d.createElement("script"),s.type="text/javascript",s.id="zohodeskasapscript",s.defer=!0,s.nonce="{place_your_nonce_value_here}",s.src="https://desk.zoho.in/portal/api/web/asapApp/191794000001642019?orgId=60040623507",t=d.getElementsByTagName("script")[0],t.parentNode.insertBefore(s,t),window.ZohoDeskAsapReady=function(s){var e=window.ZohoDeskAsap__asyncalls=window.ZohoDeskAsap__asyncalls||[];window.ZohoDeskAsapReadyStatus?(s&&e.push(s),e.forEach(s=>s&&s()),window.ZohoDeskAsap__asyncalls=null):s&&e.push(s)};
        `,
      }}
      strategy="afterInteractive"
    />
  );
};

export default ZohoDeskWidget;
