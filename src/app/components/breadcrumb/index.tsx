import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react"
import { FaChevronRight } from "react-icons/fa"

// #TODO REMOVE ANYS
type IBreadcrumb = {
    breadcrumbpath: any,
}

const Index = ({ breadcrumbpath }: IBreadcrumb) => {
    return (
        <Flex width={'100%'}>
            <Breadcrumb spacing='8px' separator={<FaChevronRight color='gray.500' />}>
                {
                    // #TODO REMOVE ANYS
                    breadcrumbpath.map((path: any, index: number) => {
                        return (
                            <BreadcrumbItem key={index}>
                                <BreadcrumbLink href={path.path}>{path.label}</BreadcrumbLink>
                            </BreadcrumbItem>
                        )
                    })
                }
            </Breadcrumb>
        </Flex>
    )
}

export default Index