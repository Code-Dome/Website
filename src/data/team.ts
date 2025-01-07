import BrandonAvatar from "../../brandon_avatar.png"

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Angelo Chettiar",
    role: "Founder",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYHXFqb2Oq4oARiicIv3yd1JRjdayAXtQ91g&s",
    bio: "Software Engineer"
  },
  {
    name: "Ethan Ankadu",
    role: "Founder",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEqMR_2Qo2y1w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1669961252103?e=2147483647&v=beta&t=RqplPOee5WD8eks-ezMmCxvKOFqWv8E0mD0xHDYd8kc",
    bio: "Software Engineer"
  },
  {
    name: "Akiel Amod",
    role: "Founder",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHMk236sm24AA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712587848780?e=2147483647&v=beta&t=pEE5F6LpFyobJctogL9yXQkBYj4iibtDKNWqErunlC8",
    bio: "Business Analyst"
  },
  {
    name: "Asanda Mkhize",
    role: "Founder",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHLAC1JCiFdXQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1672740099451?e=2147483647&v=beta&t=LRfsyuYh1E_82Me5uxY6JK04REN7gG92lijKGFHigmw",
    bio: "Software Engineer"
  },
  {
    name: "Brandon-Lee Schultz",
    role: "Founder",
    image: BrandonAvatar,
    bio: "Software Engineer"
  }
];