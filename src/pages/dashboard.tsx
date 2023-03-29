import { Flex, SimpleGrid } from '@chakra-ui/react';
import { NextPage } from 'next';
import { ChartComponent } from '../components/Chart';
import Header from '../components/Header';
import { SideBar } from '../components/Sidebar';

const Dashboard: NextPage = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <ChartComponent title="Inscritos da semana"/>
          <ChartComponent title="Taxa de abertura"/>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Dashboard;