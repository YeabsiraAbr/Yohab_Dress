import { Box, Container, Typography } from "@/components";
import Image from "next/image";
import Link from "next/link";
import * as Styles from "./styles";

export function Footer() {
  return (
    <>
      <Styles.Container>
        <Container size="lg">
          <Image
            src="/yohab_dress-17-07-2024-0020.jpg"
            alt="logo"
            width={120}
            height={120}
            style={{ objectFit: "contain" }}
          />
        </Container>
        <Container size="lg">
          <Box
            flexDirection={{
              "@initial": "column",
              "@table-min": "row",
            }}
            justifyContent="space-between"
            gap={2}
          >
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">
                Categories
              </Typography>
              <Styles.List>
                <li>
                  <Link href="">Clothing</Link>
                </li>
                <li>
                  <Link href="">Accessories</Link>
                </li>
                <li>
                  <Link href="">Women</Link>
                </li>
                <li>
                  <Link href="">Men</Link>
                </li>
                <li>
                  <Link href="">Shoes</Link>
                </li>
                <li>
                  <Link href="">New Arrivals</Link>
                </li>
                <li>
                  <Link href="">New Clearance</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">
                Our policy
              </Typography>
              <Styles.List>
                <li>
                  <Link href="">Brands</Link>
                </li>
                <li>
                  <Link href="">Contact us</Link>
                </li>
                <li>
                  <Link href="">About</Link>
                </li>
                <li>
                  <Link href="">Blog</Link>
                </li>
                <li>
                  <Link href="">Coming soon</Link>
                </li>
                <li>
                  <Link href="">Shop</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">
                Get in touch
              </Typography>
              <Styles.List>
                <li>
                  <Link href="">
                    <span>Yohab Dress</span>
                    <br />
                    <br />
                    <span>Ldeta</span>
                  </Link>
                </li>
                <li>
                  <Link href="">support@example.com</Link>
                </li>
                <li>
                  <Link href="">+2519111111111</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">
                follow us
              </Typography>
              <Styles.List>
                <li>
                  <Link href="">Facebook</Link>
                </li>
                <li>
                  <Link href=""> Twitter</Link>
                </li>
                <li>
                  <Link href="">Instagram</Link>
                </li>
                <li>
                  <Link href="">Pinterest</Link>
                </li>
                <li>
                  <Link href="">Youtube</Link>
                </li>
              </Styles.List>
            </Box>
          </Box>
        </Container>
      </Styles.Container>
      <Container size="lg">
        <Box marginTop={3} marginBottom={3}>
          <Typography size="xsm">
            © Yohab Dress {new Date().getFullYear()}. Powered with by
            {" Yeabsira "}
          </Typography>
        </Box>
      </Container>
    </>
  );
}
