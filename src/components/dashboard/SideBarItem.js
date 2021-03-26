import React from 'react'
import { Icon, Menu } from "semantic-ui-react"
import styled from 'styled-components';

export default function SideBarItem(props) {
    const highlight = props.highlight ? 'highlight-item' : null;
    return (
        <SideMenu>
            <Menu.Item className={['sidebar-item', highlight].join(' ')}>
                <Row>
                    <span><Icon size='large' name={props.icon}/></span>
                    <span>{props.label}</span>
                </Row>
            </Menu.Item>
        </SideMenu>
    )
}

const SideMenu = styled.div`
    background: #f5f5f5;
    span {
        i.icon {
            margin-right: 20px;
            color: #888888;
        }
    }

    &.highlight-item {
        span {
            font-weight: 600;
        }
        i.icon {
            color: #ff0002;
        }
    }
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;