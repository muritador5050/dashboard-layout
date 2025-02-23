// NavLinks.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { routes, Route } from './routes';

export default function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const handleToggle = (key: string) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderRoute = (route: Route, nested = false) => {
    const hasChildren = route.children && route.children.length > 0;

    // Determine left padding based on nesting level.
    const paddingLeft = nested ? 4 : 2;

    if (hasChildren) {
      return (
        <React.Fragment key={route.name}>
          <ListItemButton
            onClick={() => handleToggle(route.name)}
            sx={{ pl: paddingLeft }}
          >
            <ListItemText primary={route.name} />
            {open[route.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open[route.name]} timeout='auto' unmountOnExit>
            {route.children!.map((child) => (
              // Recursively render children with increased nesting
              <React.Fragment key={child.name}>
                <Link href={child.href} passHref legacyBehavior>
                  <ListItemButton
                    sx={{ pl: paddingLeft + 2 }}
                    selected={pathname === child.href}
                  >
                    <ListItemText primary={child.name} />
                  </ListItemButton>
                </Link>
              </React.Fragment>
            ))}
          </Collapse>
        </React.Fragment>
      );
    }

    // For routes without children, render as a simple clickable item.
    return (
      <Link key={route.name} href={route.href} passHref legacyBehavior>
        <ListItemButton
          sx={{ pl: paddingLeft }}
          selected={pathname === route.href}
        >
          <ListItemText primary={route.name} />
        </ListItemButton>
      </Link>
    );
  };

  // Renders the complete list of routes.
  // If a route has a subHeader, it is rendered as a section header.
  const renderLinks = (routes: Route[]) => (
    <List component='nav'>
      {routes.map((route) => (
        <React.Fragment key={route.name}>
          {route.subHeader && (
            <ListSubheader
              disableSticky
              sx={{ pl: 2, fontSize: '1rem', lineHeight: 2 }}
            >
              {route.subHeader}
            </ListSubheader>
          )}
          {renderRoute(route, false)}
        </React.Fragment>
      ))}
    </List>
  );

  return <nav>{renderLinks(routes)}</nav>;
}
