import React from "react";
import PageTitle from "../../components/PageTitle";
import LazySection from "../../components/LazySection";
import PrivacyPolicyComponent from "../../components/PrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <>
      <PageTitle />
      <LazySection threshold={0}>
        <PrivacyPolicyComponent />
      </LazySection>
    </>
  );
};

export default PrivacyPolicy;