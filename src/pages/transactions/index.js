import MainLayout from "@/components/MainLayout";
import TransactionCard from "@/components/cards/TransactionCard";
import Head from "next/head";

const Index = () => {
    return (
        <>
            <Head>
                <title>EtherLoan</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/assets/Logo-simple.svg"/>
            </Head>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <p className="text-secondary">
                            Transactions
                        </p>
                        <TransactionCard
                            link={"/transactions/1"}
                            href={"/assets/3DIcons/at-dynamic-color.svg"}
                            notificationTitle={"Transaction in progress"}
                            notificationDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus id lectus sodales consectetur. Nunc eleifend auctor augue, sed pulvinar odio tempus at."}
                            ethAmount={0.0032}
                        ></TransactionCard>
                    </div>
                </div>
            </div>
        </>
    );
};

Index.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export default Index;