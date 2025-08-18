"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { HeaderButtonNavLight } from "./HeaderButtonNavLight";
import * as _utils from "./utils";
import _styles from "./NavbarLight.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-219":{"id":"e-219","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-220"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81661","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3a803032-1a6d-9929-d67a-d2bea4d81661","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750172120677},"e-220":{"id":"e-220","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-219"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81661","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3a803032-1a6d-9929-d67a-d2bea4d81661","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750172120678},"e-227":{"id":"e-227","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-228"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"05d12e05-f7bf-a5bf-f12c-d71988651a9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"05d12e05-f7bf-a5bf-f12c-d71988651a9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750175797451},"e-228":{"id":"e-228","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-227"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"05d12e05-f7bf-a5bf-f12c-d71988651a9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"05d12e05-f7bf-a5bf-f12c-d71988651a9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750175797451},"e-257":{"id":"e-257","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-258"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750266922613},"e-258":{"id":"e-258","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-58","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-257"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750266922615},"e-259":{"id":"e-259","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-260"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750266940543},"e-260":{"id":"e-260","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-259"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750266940545},"e-261":{"id":"e-261","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-262"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750267008925},"e-262":{"id":"e-262","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-59","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-261"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750267008926},"e-263":{"id":"e-263","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-264"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81672","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3a803032-1a6d-9929-d67a-d2bea4d81672","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750267032799},"e-264":{"id":"e-264","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-60","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-263"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81672","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3a803032-1a6d-9929-d67a-d2bea4d81672","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750267032800},"e-280":{"id":"e-280","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-281"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e89154d6-f645-235d-3a07-3b9d58b466a6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e89154d6-f645-235d-3a07-3b9d58b466a6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750300962742},"e-281":{"id":"e-281","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-280"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e89154d6-f645-235d-3a07-3b9d58b466a6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e89154d6-f645-235d-3a07-3b9d58b466a6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750300962742},"e-282":{"id":"e-282","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-283"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e89154d6-f645-235d-3a07-3b9d58b466b6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e89154d6-f645-235d-3a07-3b9d58b466b6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750300962742},"e-283":{"id":"e-283","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-282"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e89154d6-f645-235d-3a07-3b9d58b466b6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e89154d6-f645-235d-3a07-3b9d58b466b6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750300962742},"e-284":{"id":"e-284","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-285"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e89154d6-f645-235d-3a07-3b9d58b466b8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e89154d6-f645-235d-3a07-3b9d58b466b8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750300962742},"e-285":{"id":"e-285","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-58","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-284"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e89154d6-f645-235d-3a07-3b9d58b466b8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e89154d6-f645-235d-3a07-3b9d58b466b8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750300962742},"e-286":{"id":"e-286","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-287"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e89154d6-f645-235d-3a07-3b9d58b466ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e89154d6-f645-235d-3a07-3b9d58b466ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750300962742},"e-287":{"id":"e-287","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-59","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-286"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e89154d6-f645-235d-3a07-3b9d58b466ba","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e89154d6-f645-235d-3a07-3b9d58b466ba","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750300962742},"e-288":{"id":"e-288","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-289"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e89154d6-f645-235d-3a07-3b9d58b466bc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e89154d6-f645-235d-3a07-3b9d58b466bc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750300962742},"e-289":{"id":"e-289","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-60","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-288"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e89154d6-f645-235d-3a07-3b9d58b466bc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e89154d6-f645-235d-3a07-3b9d58b466bc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1750300962742},"e-290":{"id":"e-290","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-49","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-49-p","smoothing":54,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1750302018795},"e-295":{"id":"e-295","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-76","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-76-p","smoothing":76,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1750354282183},"e-296":{"id":"e-296","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-77","affectedElements":{},"duration":0}},"mediaQueries":["medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-77-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1750354684024}},"actionLists":{"a-37":{"id":"a-37","title":"change_text_menu_color","actionItemGroups":[{"actionItems":[{"id":"a-37-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".link_menu","selectorGuids":["dbc0a12e-a0fa-b208-9562-c665069fd5d1"]},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}}]},{"actionItems":[{"id":"a-37-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon_menu","selectorGuids":["b9a1e74d-8240-f2c9-1c1b-f6de7d6db638"]},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750172128691},"a-38":{"id":"a-38","title":"change_menu_original","actionItemGroups":[{"actionItems":[{"id":"a-38-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".link_menu","selectorGuids":["dbc0a12e-a0fa-b208-9562-c665069fd5d1"]},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]},{"actionItems":[{"id":"a-38-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".icon_menu","selectorGuids":["b9a1e74d-8240-f2c9-1c1b-f6de7d6db638"]},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750172220974},"a-54":{"id":"a-54","title":"team_hover","actionItemGroups":[{"actionItems":[{"id":"a-54-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"3a803032-1a6d-9929-d67a-d2bea4d8165d"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750266984395},"a-58":{"id":"a-58","title":"team_hover_back","actionItemGroups":[{"actionItems":[{"id":"a-58-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"3a803032-1a6d-9929-d67a-d2bea4d8165d"},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750267532889},"a-53":{"id":"a-53","title":"change_text_process","actionItemGroups":[{"actionItems":[{"id":"a-53-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"3a803032-1a6d-9929-d67a-d2bea4d8165b"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750266948666},"a-57":{"id":"a-57","title":"process_mouse_leave","actionItemGroups":[{"actionItems":[{"id":"a-57-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"3a803032-1a6d-9929-d67a-d2bea4d8165b"},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750267102964},"a-55":{"id":"a-55","title":"calculate","actionItemGroups":[{"actionItems":[{"id":"a-55-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"3a803032-1a6d-9929-d67a-d2bea4d8165f"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750267012994},"a-59":{"id":"a-59","title":"calc_hover_back","actionItemGroups":[{"actionItems":[{"id":"a-59-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"3a803032-1a6d-9929-d67a-d2bea4d8165f"},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750267560967},"a-56":{"id":"a-56","title":"contacct","actionItemGroups":[{"actionItems":[{"id":"a-56-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"3a803032-1a6d-9929-d67a-d2bea4d81672"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750267036003},"a-60":{"id":"a-60","title":"cont_hover_back","actionItemGroups":[{"actionItems":[{"id":"a-60-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"3a803032-1a6d-9929-d67a-d2bea4d81672"},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1750267639982},"a-49":{"id":"a-49","title":"navbar_sticky_color_backgroundchange","continuousParameterGroups":[{"id":"a-49-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-49-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"9976c390-c161-7464-f00b-e94f6daa19f7"},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}},{"id":"a-49-n-36","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ab77f44c-2675-1762-b93f-7fc778c757b0"},"globalSwatchId":"","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-49-n-5","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81672"},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-49-n-7","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81664"},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-49-n-12","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165b"},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-49-n-15","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165d"},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-49-n-18","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165f"},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-49-n-21","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81663"},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-49-n-24","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"d5ddf670-67da-cc97-09f4-6443397d14cf"},"heightValue":50,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-49-n-33","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81675"},"globalSwatchId":"--light-gold","rValue":248,"bValue":14,"gValue":197,"aValue":1}},{"id":"a-49-n-41","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"c65db928-dd05-72ab-8199-b964e18f0425"},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}},{"id":"a-49-n-44","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"c65db928-dd05-72ab-8199-b964e18f0424"},"globalSwatchId":"--white","rValue":255,"bValue":255,"gValue":255,"aValue":1}}]},{"keyframe":3,"actionItems":[{"id":"a-49-n-40","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"9976c390-c161-7464-f00b-e94f6daa19f7"},"globalSwatchId":"","rValue":225,"bValue":255,"gValue":235,"aValue":1}},{"id":"a-49-n-4","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81672"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}},{"id":"a-49-n-10","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81664"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}},{"id":"a-49-n-13","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165b"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}},{"id":"a-49-n-16","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165d"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}},{"id":"a-49-n-19","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165f"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}},{"id":"a-49-n-22","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81663"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}},{"id":"a-49-n-34","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81675"},"globalSwatchId":"--light-blue","rValue":61,"bValue":229,"gValue":116,"aValue":1}},{"id":"a-49-n-37","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ab77f44c-2675-1762-b93f-7fc778c757b0"},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-49-n-42","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"c65db928-dd05-72ab-8199-b964e18f0425"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}},{"id":"a-49-n-45","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"c65db928-dd05-72ab-8199-b964e18f0424"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}}]},{"keyframe":10,"actionItems":[{"id":"a-49-n-25","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"d5ddf670-67da-cc97-09f4-6443397d14cf"},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-49-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"9976c390-c161-7464-f00b-e94f6daa19f7"},"globalSwatchId":"","rValue":225,"bValue":255,"gValue":235,"aValue":1}}]},{"keyframe":100,"actionItems":[{"id":"a-49-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"9976c390-c161-7464-f00b-e94f6daa19f7"},"globalSwatchId":"","rValue":225,"bValue":255,"gValue":235,"aValue":1}},{"id":"a-49-n-6","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81672"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}},{"id":"a-49-n-11","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81664"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}},{"id":"a-49-n-14","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165b"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}},{"id":"a-49-n-17","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165d"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}},{"id":"a-49-n-20","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d8165f"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}},{"id":"a-49-n-23","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81663"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}},{"id":"a-49-n-26","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"d5ddf670-67da-cc97-09f4-6443397d14cf"},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-49-n-35","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81675"},"globalSwatchId":"--light-blue","rValue":61,"bValue":229,"gValue":116,"aValue":1}},{"id":"a-49-n-38","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"ab77f44c-2675-1762-b93f-7fc778c757b0"},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":1}},{"id":"a-49-n-43","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"c65db928-dd05-72ab-8199-b964e18f0425"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}},{"id":"a-49-n-46","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"c65db928-dd05-72ab-8199-b964e18f0424"},"globalSwatchId":"--dark-blue","rValue":21,"bValue":73,"gValue":19,"aValue":1}}]}]}],"createdOn":1750261261488},"a-76":{"id":"a-76","title":"logo_change-desk","continuousParameterGroups":[{"id":"a-76-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-76-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81656"},"widthValue":180,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-76-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"07f33276-11bc-6906-80e1-f4882ff11f1a"},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}}]},{"keyframe":3,"actionItems":[{"id":"a-76-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81656"},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-76-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"07f33276-11bc-6906-80e1-f4882ff11f1a"},"widthValue":180,"widthUnit":"px","heightUnit":"PX","locked":false}}]},{"keyframe":100,"actionItems":[{"id":"a-76-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"3a803032-1a6d-9929-d67a-d2bea4d81656"},"widthValue":0,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-76-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"07f33276-11bc-6906-80e1-f4882ff11f1a"},"widthValue":130,"widthUnit":"px","heightUnit":"PX","locked":false}}]}]}],"createdOn":1750354289675},"a-77":{"id":"a-77","title":"change_nav_color","continuousParameterGroups":[{"id":"a-77-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-77-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"9976c390-c161-7464-f00b-e94f6daa19f7"},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]},{"keyframe":4,"actionItems":[{"id":"a-77-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"9976c390-c161-7464-f00b-e94f6daa19f7"},"globalSwatchId":"","rValue":229,"bValue":255,"gValue":237,"aValue":1}}]},{"keyframe":100,"actionItems":[{"id":"a-77-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"9976c390-c161-7464-f00b-e94f6daa19f7"},"globalSwatchId":"","rValue":229,"bValue":255,"gValue":237,"aValue":1}}]}]}],"createdOn":1750354687484}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NavbarLight({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar-light")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Section
        className={_utils.cx(_styles, "nav_rate_cont")}
        data-w-id="d5ddf670-67da-cc97-09f4-6443397d14cf"
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "nav_rate_cont_ttext")}
          button={false}
          block="inline"
          options={{
            href: "#rates",
          }}
        >
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "bodpara2-light_rate")}
          >
            {"See This Week’s Mortgage Rates"}
          </_Builtin.Paragraph>
        </_Builtin.Link>
      </_Builtin.Section>
      <_Builtin.Block
        className={_utils.cx(_styles, "main_nav")}
        data-w-id="9976c390-c161-7464-f00b-e94f6daa19f7"
        tag="div"
      >
        <_Builtin.NavbarWrapper
          className={_utils.cx(_styles, "nav_cont_sec", "shadow-three")}
          tag="div"
          config={{
            animation: "default",
            collapse: "medium",
            docHeight: false,
            duration: 400,
            easing: "ease",
            easing2: "ease",
            noScroll: false,
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-33")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar-wrapper-2")}
              tag="div"
            >
              <_Builtin.NavbarBrand
                className={_utils.cx(_styles, "navbar-brand-2")}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "sticky_logo_light")}
                  data-w-id="3a803032-1a6d-9929-d67a-d2bea4d81656"
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/68668918c021a61c385bcde4_LighthouseLending-RemadeLogo-2025-White%403x.png"
                />
                <_Builtin.Image
                  className={_utils.cx(_styles, "sticky_logo_dark")}
                  data-w-id="07f33276-11bc-6906-80e1-f4882ff11f1a"
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/6866892f7dca044a867432a6_LighthouseLending-RemadeLogo-2025-Navy%403x.webp"
                />
              </_Builtin.NavbarBrand>
              <_Builtin.NavbarButton
                className={_utils.cx(_styles, "menu-button-4")}
                tag="div"
              >
                <_Builtin.Icon
                  className={_utils.cx(_styles, "icon-3-home")}
                  widget={{
                    type: "icon",
                    icon: "nav-menu",
                  }}
                />
              </_Builtin.NavbarButton>
              <_Builtin.NavbarMenu
                className={_utils.cx(_styles, "nav_menu_wrapper")}
                tag="nav"
                role="navigation"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-22")}
                  tag="div"
                >
                  <_Builtin.DropdownWrapper
                    className={_utils.cx(_styles, "list-item_dark-home-drop")}
                    data-w-id="3a803032-1a6d-9929-d67a-d2bea4d81661"
                    tag="div"
                    delay={0}
                    hover={true}
                  >
                    <_Builtin.DropdownToggle
                      className={_utils.cx(_styles, "dropdown-toggle-3")}
                      tag="div"
                    >
                      <_Builtin.Block tag="div">
                        <_Builtin.Icon
                          className={_utils.cx(_styles, "icon_menu")}
                          data-w-id="3a803032-1a6d-9929-d67a-d2bea4d81663"
                          widget={{
                            type: "icon",
                            icon: "dropdown-toggle",
                          }}
                        />
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "link_menu")}
                        data-w-id="3a803032-1a6d-9929-d67a-d2bea4d81664"
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"All Services "}
                      </_Builtin.Link>
                    </_Builtin.DropdownToggle>
                    <_Builtin.DropdownList
                      className={_utils.cx(_styles, "dropdown-list-3")}
                      tag="nav"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-20")}
                        tag="div"
                      >
                        <_Builtin.NotSupported _atom="DynamoWrapper" />
                      </_Builtin.Block>
                    </_Builtin.DropdownList>
                  </_Builtin.DropdownWrapper>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "list-item_dark-home_1")}
                    data-w-id="3a803032-1a6d-9929-d67a-d2bea4d8165b"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Our Process"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "list-item_dark-home2")}
                    data-w-id="3a803032-1a6d-9929-d67a-d2bea4d8165d"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Our Team"}
                  </_Builtin.Link>
                  <_Builtin.DropdownWrapper
                    className={_utils.cx(_styles, "dropdown-3")}
                    tag="div"
                    delay={0}
                    hover={true}
                  >
                    <_Builtin.DropdownToggle
                      className={_utils.cx(_styles, "dropdown-toggle-4")}
                      tag="div"
                    >
                      <_Builtin.Icon
                        className={_utils.cx(_styles, "icon-4")}
                        data-w-id="c65db928-dd05-72ab-8199-b964e18f0424"
                        widget={{
                          type: "icon",
                          icon: "dropdown-toggle",
                        }}
                      />
                      <_Builtin.Link
                        className={_utils.cx(
                          _styles,
                          "list-item_dark-home_lig"
                        )}
                        data-w-id="c65db928-dd05-72ab-8199-b964e18f0425"
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Calculate Your Rate"}
                      </_Builtin.Link>
                    </_Builtin.DropdownToggle>
                    <_Builtin.DropdownList
                      className={_utils.cx(_styles, "dropdown-list-4")}
                      tag="nav"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-65")}
                        tag="div"
                      >
                        <_Builtin.NotSupported _atom="DynamoWrapper" />
                      </_Builtin.Block>
                    </_Builtin.DropdownList>
                  </_Builtin.DropdownWrapper>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "list-item_dark-home_4")}
                    data-w-id="3a803032-1a6d-9929-d67a-d2bea4d81672"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Contact Us"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "nav-link-accent-3phone--home"
                    )}
                    button={false}
                    block=""
                    options={{
                      href: "tel:(905)234-3323",
                    }}
                  >
                    <_Builtin.Strong
                      className={_utils.cx(_styles, "phone_text")}
                      data-w-id="3a803032-1a6d-9929-d67a-d2bea4d81675"
                    >
                      {"(905) 234-3323"}
                    </_Builtin.Strong>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "header-buttom")}
                    button={true}
                    block=""
                    options={{
                      href: "/landing-pages/apply",
                    }}
                  >
                    {"Apply Today"}
                  </_Builtin.Link>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "header_nav")}
                    tag="div"
                  >
                    <HeaderButtonNavLight
                      name="Apply Today"
                      link={{
                        href: "/landing-pages/apply",
                      }}
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.NavbarMenu>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.NavbarWrapper>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "main_nav_sticky")}
        tag="div"
      >
        <_Builtin.NavbarWrapper
          className={_utils.cx(_styles, "nav_cont_sec", "shadow-three")}
          tag="div"
          config={{
            animation: "default",
            collapse: "medium",
            docHeight: false,
            duration: 400,
            easing: "ease",
            easing2: "ease",
            noScroll: false,
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-33")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "navbar-wrapper-2")}
              tag="div"
            >
              <_Builtin.NavbarBrand
                className={_utils.cx(_styles, "navbar-brand-2")}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "sticky_logo_dark")}
                  data-w-id="e89154d6-f645-235d-3a07-3b9d58b466a1"
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6754261c83063c4b66a2ec08/685185b73bec658039046772_image%208%20(2).png"
                />
              </_Builtin.NavbarBrand>
              <_Builtin.NavbarButton
                className={_utils.cx(_styles, "menu-button-4")}
                tag="div"
              >
                <_Builtin.Icon
                  className={_utils.cx(_styles, "icon-3-home")}
                  widget={{
                    type: "icon",
                    icon: "nav-menu",
                  }}
                />
              </_Builtin.NavbarButton>
              <_Builtin.NavbarMenu
                className={_utils.cx(_styles, "nav_menu_wrapper")}
                tag="nav"
                role="navigation"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-22")}
                  tag="div"
                >
                  <_Builtin.DropdownWrapper
                    className={_utils.cx(
                      _styles,
                      "list-item_dark-home-drop-copy"
                    )}
                    data-w-id="e89154d6-f645-235d-3a07-3b9d58b466a6"
                    tag="div"
                    delay={0}
                    hover={true}
                  >
                    <_Builtin.DropdownToggle
                      className={_utils.cx(_styles, "dropdown-toggle-3")}
                      tag="div"
                    >
                      <_Builtin.Block tag="div">
                        <_Builtin.Icon
                          className={_utils.cx(_styles, "icon_menu-copy")}
                          widget={{
                            type: "icon",
                            icon: "dropdown-toggle",
                          }}
                        />
                      </_Builtin.Block>
                      <_Builtin.Link
                        className={_utils.cx(_styles, "link_menu-copy")}
                        button={false}
                        block=""
                        options={{
                          href: "/servicesv2",
                        }}
                      >
                        {"All Services "}
                      </_Builtin.Link>
                    </_Builtin.DropdownToggle>
                    <_Builtin.DropdownList
                      className={_utils.cx(_styles, "dropdown-list-3")}
                      tag="nav"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-20")}
                        tag="div"
                      >
                        <_Builtin.NotSupported _atom="DynamoWrapper" />
                      </_Builtin.Block>
                    </_Builtin.DropdownList>
                  </_Builtin.DropdownWrapper>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "list-item_dark-home_1-copy")}
                    data-w-id="e89154d6-f645-235d-3a07-3b9d58b466b6"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Our Process"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "list-item_dark-home2-copy")}
                    data-w-id="e89154d6-f645-235d-3a07-3b9d58b466b8"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Our Team"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "list-item_dark-home_3-copy")}
                    data-w-id="e89154d6-f645-235d-3a07-3b9d58b466ba"
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Calculate Your Rate"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "list-item_dark-home_4-copy")}
                    data-w-id="e89154d6-f645-235d-3a07-3b9d58b466bc"
                    button={false}
                    block=""
                    options={{
                      href: "/contact-v2",
                    }}
                  >
                    {"Contact Us"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "nav-link-accent-3phone--home"
                    )}
                    button={false}
                    block=""
                    options={{
                      href: "tel:(905)234-3323",
                    }}
                  >
                    <_Builtin.Strong
                      className={_utils.cx(_styles, "phone_text-copy")}
                    >
                      {"(905) 234-3323"}
                    </_Builtin.Strong>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "header-buttom")}
                    button={true}
                    block=""
                    options={{
                      href: "/landing-pages/apply",
                    }}
                  >
                    {"Apply Today"}
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.NavbarMenu>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.NavbarWrapper>
      </_Builtin.Block>
    </_Component>
  );
}
