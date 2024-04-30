import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from "@chakra-ui/react"
import { FaChevronRight } from "react-icons/fa"

interface Breadcrumb {
    label: string,
    path: string
}

type IBreadcrumb = {
    breadcrumbpath: Array<Breadcrumb>
}

const BreadcrumbComponent = ({ breadcrumbpath }: IBreadcrumb) => {
    return (
        <Flex width={"100%"}>
            <Breadcrumb spacing="8px" separator={<FaChevronRight color="gray.500" />}>
                {
                    breadcrumbpath.map((path, index: number) => {
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

export default BreadcrumbComponent