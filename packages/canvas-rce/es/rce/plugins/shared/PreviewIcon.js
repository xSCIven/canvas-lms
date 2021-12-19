import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/*
 * Copyright (C) 2021 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '@instructure/ui-spinner';
import { Flex } from '@instructure/ui-flex';
import formatMessage from "../../../format-message.js";

const PreviewIcon = ({
  color,
  testId,
  variant,
  image,
  loading
}) => {
  const variantSettings = PreviewIcon.variants[variant];
  return /*#__PURE__*/React.createElement("span", {
    "data-testid": testId,
    style: _objectSpread({
      display: 'block',
      height: variantSettings.width,
      width: variantSettings.width
    }, (() => {
      if (loading) return {};

      if (!!image) {
        return {
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderRadius: '8px'
        };
      }

      return {
        border: '1px solid #73818C',
        borderRadius: '3px',
        background: color || `
        linear-gradient(
          135deg,
          rgba(255,255,255,1) ${variantSettings.gradientOne}, rgba(255,0,0,1) ${variantSettings.gradientOne},
          rgba(255,0,0,1) ${variantSettings.gradientTwo}, rgba(255,255,255,1) ${variantSettings.gradientTwo}
        )
      `
      };
    })())
  }, loading && /*#__PURE__*/React.createElement(Flex, {
    as: "div",
    direction: "column"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    textAlign: "center"
  }, /*#__PURE__*/React.createElement(Spinner, {
    renderTitle: formatMessage('Loading preview'),
    size: "small"
  }))));
};

PreviewIcon.variants = {
  small: {
    width: '25px',
    gradientOne: '43%',
    gradientTwo: '57%'
  },
  large: {
    width: '50px',
    gradientOne: '49%',
    gradientTwo: '51%'
  }
};
PreviewIcon.propTypes = {
  color: PropTypes.string,
  testId: PropTypes.string,
  variant: PropTypes.string,
  image: PropTypes.string,
  loading: PropTypes.bool
};
PreviewIcon.defaultProps = {
  variant: 'small',
  color: null,
  testId: null,
  image: '',
  loading: false
};
export default PreviewIcon;