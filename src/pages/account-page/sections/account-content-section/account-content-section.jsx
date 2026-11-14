import { Container } from "../../../../layouts/container/container";
import { AccountProfileCard } from "./components/account-profile-card/account-profile-card";
import { AccountDetailsCard } from "./components/account-details-card/account-details-card";

export function AccountContentSection({ user, bookingsCount, onLogout }) {
  return (
    <Container as="section" className="py-[82px] max-[650px]:py-[56px]">
      <div className="grid grid-cols-[310px_1fr] max-[650px]:grid-cols-1 gap-5">
        <AccountProfileCard
          user={user}
          bookingsCount={bookingsCount}
          onLogout={onLogout}
        />
        <AccountDetailsCard user={user} />
      </div>
    </Container>
  );
}

export default AccountContentSection;
