import { useState } from 'react';
import { ListItem } from '../listItem/listItem';
import Pagination from '../pagination/pagination';


export const ListGenerate = (props) => {
    const { data } = props;
    const [posts, setPosts] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const nextPage = (page) => {
        if (currentPage !== page) {
            setCurrentPage(currentPage + 1)
        }
    }
    const prevPage = (page) => {
        if (currentPage !== page) {
            setCurrentPage(currentPage - 1)
        }
    }
    const renderItems = currentPosts.map(item => {
        return (
            <>
                <ListItem key={item.id}
                    data={item}
                    posts={currentPosts} />
            </>

        )

    });
    return (
        <div className='container flex flex-col mx-auto gap-2.5'>
            {renderItems}
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
        </div>
    )

}