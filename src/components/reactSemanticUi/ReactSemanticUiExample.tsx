import React from 'react';
import ButtonExampleLabeledBasic from "./ButtonExampleLabeledBasic";
import ButtonExampleBasicShorthand from "./ButtonExampleBasicShorthand";
import ButtonExampleMultipleConditionals from "./ButtonExampleMultipleConditionals";
import ButtonExampleLoading from "./ButtonExampleLoading";
import ButtonExampleSocial from "./ButtonExampleSocial";
import ListExampleTree from "./ListExampleTree";
import VisibilityExampleVisibility from "./VisibilityExampleVisibility";

export default () => {
    return(
        <>
            <VisibilityExampleVisibility/>
            <ListExampleTree/>
            <ButtonExampleSocial/>
            <ButtonExampleLoading/>
            <ButtonExampleMultipleConditionals/>
            <ButtonExampleBasicShorthand/>
            <ButtonExampleLabeledBasic/>
        </>
    )
}