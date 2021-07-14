import React, { useState, useEffect } from "react";
import {
    fetchMovieDetail,
    fetchMovieVideos,
    fetchCasts,
    fetchSimilarMovie,
} from "../../service";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import {Modal, ModalBody} from "react-bootstrap";
import ReactPlayer from "react-player";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom"
export default function MovieDetail({match}){
let params = match.params;
let genres = [];
const [isOpen,setIsOpen] = useState(false)
const [detail, setDetail] = useState([]);
const [video, setVideo] = useState([]);
const [casts, setCasts] = useState([]);
const [similarMovie, setSimilarMovie] = useState([]);

useEffect(()=>{
    const fetchAPI = async ()=>{
        setDetail(await fetchMovieDetail(params.id))
        setVideo(await fetchMovieVideos(params.id))
        setCasts(await fetchCasts(params.id))
        setDetail(await fetchSimilarMovie(params.id))
    }
    fetchAPI()
},[params.id])

    genres = detail.genres;
const MoviePalyerModal = (props)=> {
    const youtubeUrl1 = 'https://www.youtube.com/watch?v=';
    return (
        <Modal{
                  ...props
              }
              size="lg"
              aria-labelledby = "contained-modal-title-vcenter"
              centered
        >
    <Modal.Header closeButton>
        <Modal.Title
            id="contained-modal-title-vcenter"
            style={{color: "#000000", fontWeight: "bolder" }}/>
    </Modal.Header>
        <ModalBody

        </Modal>
    )
}

    return(
<div>

</div>
)}