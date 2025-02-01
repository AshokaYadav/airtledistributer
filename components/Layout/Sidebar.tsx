// components/Sidebar.tsx

import SidebarLink from "./SidebarLinkProps";


export default function Sidebar() {
  return (
    <ul>
      <SidebarLink href="/admin">Admin</SidebarLink>
      <SidebarLink href="/distributer">Distributer</SidebarLink>
      <SidebarLink href="/fsc">FSC</SidebarLink>
      {/* <SidebarLink href="/Add-Instruments">Add Mobikwik</SidebarLink>
      <SidebarLink href="/Details">Details</SidebarLink>
      <SidebarLink href="/Control-Panel">Control Panel</SidebarLink>
      <SidebarLink href="/TransactionData">TransactionData</SidebarLink>
      <SidebarLink href="/Extra-Management">Extra Management</SidebarLink> */}
    </ul>
  );
}
