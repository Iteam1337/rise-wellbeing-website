import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import App from "../App";
import { CATEGORIES_QUERY } from "../graphql/queries";

const mocks = [
  {
    request: {
      query: CATEGORIES_QUERY,
    },
    result: {
      data: {
        categories: [
          {
            __typename: "Category",
            id: "bf3f0bf6-b86c-49e0-96fe-d5b89e1a79c3",
            label: "Träning",
            introduction:
              "Detta är en ingresstext på ungefär exakt 219 tecken inklusive blanksteg. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
            information:
              "Detta är en lite längre text på ungefär exakt 1448 tecken inklusive blanksteg. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
          },
        ],
      },
    },
  },
];

test("renders learn react link", () => {
  const { getByText } = render(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
  );
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
