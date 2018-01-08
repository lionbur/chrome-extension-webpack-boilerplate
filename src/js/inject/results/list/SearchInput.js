import React from 'react'
import styled from 'styled-components'
import SearchInput from 'react-search-input'

export default styled(SearchInput)`
  flex: 1;
  padding: 5px 0;
  position: relative;
  
  &::before {
    content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAQJJREFUKBWVkr2uQUEUhf3ET6GRaC5aFRoJKrf1BKpb8SwqovYGXkCj00k0QnRKEYkILYobvpUYmeMMyVnJl7P3mjN7Zu9zwiGv2qRFyMMSRrAFp6JPN8XzBj+wgDkUYAg7WINTYdwpDECxrRLJHeq2accdkgm8bzTvNAg2EDOGeUYI1KNO1gkuzTA1g8T7ojbn4ONQWPuHPWgeHmnzCqoe15tkSNPgPEAn68oVcOmA2XMtGK9FoE/VhOTTVNExqLCGZnxCv2pYauEC6lF0oQxX6IOvb7yX9NPEQafan+aPXDdQC18LsO6Tip5BBY6gIQaSbnMCFRCBZRcIvFkbsvCr4AFGOCxQy+JdGQAAAABJRU5ErkJggg==');
    display: block;
    position: absolute;
    width: 15px;
    z-index: 3;
    height: 15px;
    font-size: 20px;
    top: 8px;
    left: 0;
    line-height: 32px;
    opacity: 0.6;
  }
  
  & > input {
    width: 100%;
    font-size: 14px;
    border: none;
    line-height: 22px;
    padding: 0px 0px 0px 19px;
    height: 32px;
    position: relative;
    background-color: transparent;
  }
  
  & > input:focus {
    outline: none;
    z-index: 1;
  }  
`
